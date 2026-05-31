import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  CalendarDays,
  Mail,
  MapPin,
  Menu,
  Stethoscope,
  X
} from "lucide-react";
import NavLinkButton from "../components/NavLinkButton.jsx";

const nav = [
  ["/", "Home"],
  ["/announcements", "Announcements"],
  ["/resources", "Resources"],
  ["/locker-system", "Locker System"],
  ["/services", "Services"],
  ["/concerns", "Concerns"],
  ["/admin", "Admin"]
];

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="bg-plm-green text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Pamantasan ng Lungsod ng Maynila • College of Nursing</span>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <span className="flex items-center gap-1"><Mail size={14} /> cn.infohub@plm.edu.ph</span>
            <span className="flex items-center gap-1"><CalendarDays size={14} /> Updated June 2026</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-plm-green text-plm-yellow shadow-md">
              <Stethoscope size={25} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-plm-green">CN Information Hub</p>
              <h1 className="text-lg font-black leading-tight md:text-2xl">College of Nursing Digital Hub</h1>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map(([to, label]) => <NavLinkButton key={to} to={to}>{label}</NavLinkButton>)}
          </nav>

          <button className="rounded-xl border p-2 lg:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] bg-black/40 lg:hidden">
          <div className="ml-auto h-full w-80 bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-black text-plm-green">Menu</p>
              <button onClick={() => setOpen(false)}><X /></button>
            </div>
            <div className="grid gap-2">
              {nav.map(([to, label]) => (
                <NavLinkButton key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLinkButton>
              ))}
            </div>
          </div>
        </div>
      )}

      <Outlet />

      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-black text-plm-green">College of Nursing Digital Hub</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Centralized information, accountability, accessibility, and student support for PLM nursing students.
            </p>
          </div>
          <div>
            <p className="font-black">Quick Links</p>
            <div className="mt-3 grid gap-2 text-sm text-zinc-600">
              {nav.slice(1).map(([to, label]) => <Link key={to} to={to} className="hover:text-plm-green">{label}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-black">Information Standard</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Every official post should include title, date released, issuing office, purpose, deadline, target audience, contact person, and reference document.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
