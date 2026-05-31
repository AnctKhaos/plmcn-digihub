export function lockerStatusStyle(status) {
  const base = "rounded-full px-3 py-1 text-xs font-black";
  if (status === "Occupied") return `${base} bg-emerald-100 text-emerald-700`;
  if (status === "Available") return `${base} bg-blue-100 text-blue-700`;
  if (status === "Reserved") return `${base} bg-amber-100 text-amber-700`;
  if (status === "Under Maintenance") return `${base} bg-rose-100 text-rose-700`;
  return `${base} bg-zinc-200 text-zinc-700`;
}

export function announcementBadgeStyle(category) {
  const base = "rounded-full px-3 py-1 text-xs font-black";
  if (category === "Clinical") return `${base} bg-green-100 text-green-700`;
  if (category === "Academic") return `${base} bg-blue-100 text-blue-700`;
  if (category === "Student Affairs") return `${base} bg-purple-100 text-purple-700`;
  if (category === "Opportunities") return `${base} bg-emerald-100 text-emerald-700`;
  return `${base} bg-zinc-100 text-zinc-700`;
}
