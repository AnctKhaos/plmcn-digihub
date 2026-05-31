import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Bell, Download, Lock, MessageSquareText } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import { concernMetrics, concernTypes, resourceMetrics } from "../data/metrics.js";

export default function AdminDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="Admin Dashboard"
        subtitle="Prototype analytics for announcements, student concerns, resources, and locker monitoring. Connect to a backend for live data."
      />

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={Bell} value="5" label="Announcements" note="Currently published" />
        <StatCard icon={MessageSquareText} value="42" label="Concerns" note="Received this cycle" />
        <StatCard icon={Lock} value="6" label="Lockers" note="Tracked in database" />
        <StatCard icon={Download} value="1,112" label="Downloads" note="Across resource files" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ChartCard title="Concern Status Overview">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={concernMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#0f5132" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Resource Downloads">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={resourceMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="downloads" fill="#f5c542" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Concern Types">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={concernTypes} dataKey="count" nameKey="type" outerRadius={90} fill="#0f5132" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <p className="text-xl font-black text-plm-green">Suggested Admin Modules</p>
          <div className="mt-5 grid gap-3">
            {[
              "Announcement CMS",
              "Concern tracking table",
              "Locker assignment and renewal manager",
              "Resource upload and archive manager",
              "Quarterly concern report generator",
              "Role-based admin access"
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-zinc-50 p-4 font-bold">{item}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ChartCard({ title, children }) {
  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
      <p className="mb-5 text-xl font-black text-plm-green">{title}</p>
      {children}
    </section>
  );
}
