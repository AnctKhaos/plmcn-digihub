import PageHeader from "../components/PageHeader.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="Student Services"
        subtitle="Quick access guide for offices and services commonly needed by nursing students."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.short} className="card-hover rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
              <Icon className="mb-4 text-plm-green" size={30} />
              <p className="text-sm font-black uppercase tracking-wider text-plm-green">{service.short}</p>
              <h2 className="mt-1 text-2xl font-black">{service.name}</h2>
              <p className="mt-3 text-sm font-bold text-zinc-500">{service.location}</p>
              <p className="mt-3 leading-relaxed text-zinc-600">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.actions.map((action) => (
                  <span key={action} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-700">{action}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
