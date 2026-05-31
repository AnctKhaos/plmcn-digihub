import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bell, ClipboardList, Download, Lock, MessageSquareText, ShieldCheck, Sparkles, Users } from "lucide-react";
import StatCard from "../components/StatCard.jsx";
import AnnouncementCard from "../components/AnnouncementCard.jsx";
import { announcements } from "../data/announcements.js";

export default function Home() {
  return (
    <>
      <section className="hero-pattern relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/20">
              <Sparkles size={16} /> Official CN Information, Services, and Student Support Hub
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">College of Nursing Digital Hub</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              A single access point for announcements, forms, clinical reminders, resources, locker monitoring, and student concerns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/announcements" className="rounded-full bg-plm-yellow px-6 py-3 font-black text-plm-green shadow-lg transition hover:scale-105">Latest Announcements</Link>
              <Link to="/resources" className="rounded-full bg-white px-6 py-3 font-black text-plm-green transition hover:bg-plm-yellowSoft">Access Resources</Link>
              <Link to="/concerns" className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10">Submit Concern</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="rounded-[2rem] bg-white p-5 text-zinc-900 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-plm-green">Priority Advisory</h2>
              <span className="rounded-full bg-plm-yellowSoft px-3 py-1 text-xs font-black text-plm-green">URGENT</span>
            </div>
            <p className="text-2xl font-black">{announcements[0].title}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">{announcements[0].summary}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-plm-greenLight p-4"><b>Date</b><br />{announcements[0].date}</div>
              <div className="rounded-2xl bg-plm-greenLight p-4"><b>Deadline</b><br />{announcements[0].deadline}</div>
            </div>
            <Link to="/announcements" className="mt-5 flex w-full items-center justify-center rounded-2xl bg-plm-green px-5 py-3 font-bold text-white">Read Advisory</Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard icon={Bell} label="Advisories" value="4" note="Official college updates" />
          <StatCard icon={Download} label="Resources" value="8" note="Forms and templates" />
          <StatCard icon={Lock} label="Lockers" value="6" note="Tracked status" />
          <StatCard icon={MessageSquareText} label="Concern Desk" value="5" note="Tracking stages" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="mb-5 flex items-end justify-between">
              <div><p className="text-sm font-black uppercase tracking-[0.2em] text-plm-green">Latest</p><h2 className="text-3xl font-black">Announcements</h2></div>
              <Link to="/announcements" className="font-black text-plm-green">View all</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">{announcements.map((item) => <AnnouncementCard key={item.id} item={item} />)}</div>
          </div>

          <div className="rounded-[2rem] bg-plm-green p-7 text-white shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-plm-yellow">Core Functions</p>
            <h2 className="mt-2 text-3xl font-black">Built for faster access, cleaner communication, and student-centered service.</h2>
            <div className="mt-6 grid gap-3">
              {[[ClipboardList,"Official announcements and archives"],[Download,"Forms, templates, and trackers"],[Lock,"Locker application and monitoring"],[MessageSquareText,"Student concern tracking"],[Users,"Student services directory"],[ShieldCheck,"Governance and accountability"]].map(([Icon, text]) => (
                <div key={text} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10"><Icon className="text-plm-yellow" /> <span className="font-bold">{text}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
