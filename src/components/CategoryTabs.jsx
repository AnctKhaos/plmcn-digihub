export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-black transition ${
            active === category ? "bg-plm-green text-white" : "bg-white text-zinc-700 ring-1 ring-zinc-100 hover:bg-zinc-50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
