import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import SearchBar from "../components/SearchBar.jsx";
import CategoryTabs from "../components/CategoryTabs.jsx";
import AnnouncementCard from "../components/AnnouncementCard.jsx";
import Modal from "../components/Modal.jsx";
import { announcements, categories } from "../data/announcements.js";

export default function Announcements() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return announcements.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const text = `${item.title} ${item.category} ${item.office} ${item.summary} ${item.audience}`.toLowerCase();
      return matchesCategory && text.includes(query.toLowerCase());
    });
  }, [query, category]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="Announcements"
        subtitle="Search and filter official college advisories by category, deadline, issuing office, and target audience."
      />

      <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto]">
        <SearchBar value={query} onChange={setQuery} placeholder="Search announcements, memoranda, offices, deadlines..." />
        <CategoryTabs categories={categories} active={category} onChange={setCategory} />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => <AnnouncementCard key={item.id} item={item} onSelect={setSelected} />)}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <div>
            <p className="leading-relaxed text-zinc-700">{selected.body}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Detail label="Category" value={selected.category} />
              <Detail label="Date Released" value={selected.date} />
              <Detail label="Deadline" value={selected.deadline} />
              <Detail label="Issuing Office" value={selected.office} />
              <Detail label="Target Audience" value={selected.audience} />
              <Detail label="Contact" value={selected.contact} />
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div className="rounded-2xl bg-zinc-50 p-4">
      <p className="text-xs font-black uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}
