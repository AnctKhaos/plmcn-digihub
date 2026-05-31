import { Download } from "lucide-react";

export default function ResourceCard({ resource }) {
  const Icon = resource.icon;
  return (
    <div className="card-hover rounded-[1.7rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-plm-green text-plm-yellow">
        <Icon size={24} />
      </div>
      <p className="text-lg font-black">{resource.title}</p>
      <p className="mt-1 text-sm font-black text-plm-green">{resource.type} • {resource.group}</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{resource.description}</p>
      <div className="mt-5 flex items-center justify-between text-sm text-zinc-500">
        <span>{resource.downloads} downloads</span>
        <span>{resource.updated}</span>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-100 px-4 py-3 font-black transition hover:bg-plm-yellow hover:text-plm-green">
        <Download size={16} /> Download
      </button>
    </div>
  );
}
