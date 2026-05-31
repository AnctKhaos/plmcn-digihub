import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import SearchBar from "../components/SearchBar.jsx";
import CategoryTabs from "../components/CategoryTabs.jsx";
import ResourceCard from "../components/ResourceCard.jsx";
import { resources, resourceGroups } from "../data/resources.js";

export default function Resources() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");

  const filtered = useMemo(() => {
    return resources.filter((item) => {
      const matchesGroup = group === "All" || item.group === group;
      const text = `${item.title} ${item.type} ${item.group} ${item.description}`.toLowerCase();
      return matchesGroup && text.includes(query.toLowerCase());
    });
  }, [query, group]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="Academic Resources and Download Center"
        subtitle="A searchable repository for templates, forms, trackers, reviewers, guidelines, manuals, and reference materials."
      />

      <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto]">
        <SearchBar value={query} onChange={setQuery} placeholder="Search forms, templates, trackers, guidelines..." />
        <CategoryTabs categories={resourceGroups} active={group} onChange={setGroup} />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}
      </div>

      <section className="mt-8 rounded-[2rem] bg-plm-green p-7 text-white shadow-soft">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-plm-yellow">Opportunities Board</p>
        <h2 className="mt-2 text-3xl font-black">Scholarships, seminars, trainings, leadership, and volunteer opportunities.</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {["Scholarship Programs", "Volunteer Opportunities", "Leadership Applications", "Seminars and Trainings", "Research Calls", "Competitions and Awards"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold ring-1 ring-white/10">{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
