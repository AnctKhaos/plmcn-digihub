export default function StatCard({ icon: Icon, label, value, note }) {
  return (
    <div className="card-hover rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-plm-green text-plm-yellow">
        <Icon size={24} />
      </div>
      <p className="text-3xl font-black">{value}</p>
      <p className="mt-1 font-bold text-zinc-700">{label}</p>
      {note && <p className="mt-2 text-sm text-zinc-500">{note}</p>}
    </div>
  );
}
