import { CalendarDays, ChevronRight } from "lucide-react";
import { announcementBadgeStyle } from "../utils/statusStyles.js";

export default function AnnouncementCard({ item, onSelect }) {
  return (
    <button
      onClick={() => onSelect?.(item)}
      className="card-hover w-full rounded-[1.5rem] border border-zinc-100 bg-white p-5 text-left shadow-sm"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={announcementBadgeStyle(item.category)}>{item.category}</span>
        {item.urgent && <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-black text-white">URGENT</span>}
      </div>
      <h3 className="text-xl font-black leading-tight">{item.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">{item.summary}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-zinc-500">
          <CalendarDays size={16} /> {item.date}
        </span>
        <span className="flex items-center gap-1 font-black text-plm-green">
          Read <ChevronRight size={16} />
        </span>
      </div>
    </button>
  );
}
