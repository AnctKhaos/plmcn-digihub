import PageHeader from "../components/PageHeader.jsx";

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="About the CN Digital Hub"
        subtitle="A proposed centralized digital information and service platform for the College of Nursing."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <section className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-zinc-100">
          <p className="text-2xl font-black text-plm-green">Project Vision</p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            To establish a transparent, responsive, accessible, and data-driven information system for nursing students, student leaders, faculty, and administrators through a centralized digital communication platform.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            The hub is designed to modernize information dissemination, reduce scattered announcements, improve access to documents, support student representation, and strengthen accountability in student services and locker management.
          </p>
        </section>

        <section className="rounded-[2rem] bg-plm-green p-7 text-white shadow-soft">
          <p className="text-2xl font-black">Core Outputs</p>
          <div className="mt-5 grid gap-3">
            {[
              "CN Information Hub",
              "Digital Bulletin Board",
              "Academic Resource Repository",
              "Locker Monitoring System",
              "Student Concern Desk",
              "Admin Analytics Dashboard",
              "Information Dissemination Standards"
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold ring-1 ring-white/10">{item}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
