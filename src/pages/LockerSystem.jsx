import { ClipboardList, QrCode, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { lockerRows, lockerRules, lockerWorkflow } from "../data/locker.js";
import { lockerStatusStyle } from "../utils/statusStyles.js";

export default function LockerSystem() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="Locker System"
        subtitle="A transparent locker inventory, assignment, monitoring, renewal, and accountability system for the College of Nursing."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-zinc-100">
          <div className="border-b p-5">
            <p className="text-xl font-black text-plm-green">Locker Monitoring Dashboard</p>
            <p className="text-sm text-zinc-500">Prototype status indicators: Occupied, Available, Reserved, Under Maintenance, Locked Due to Violation.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 text-xs uppercase tracking-wider text-zinc-500">
                <tr>
                  <th className="p-4">Locker No.</th>
                  <th className="p-4">Assigned To</th>
                  <th className="p-4">Student / Org No.</th>
                  <th className="p-4">Year</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {lockerRows.map((row) => (
                  <tr key={row.no} className="border-t">
                    <td className="p-4 font-black">{row.no}</td>
                    <td className="p-4">{row.assignee}</td>
                    <td className="p-4">{row.studentNo}</td>
                    <td className="p-4">{row.year}</td>
                    <td className="p-4"><span className={lockerStatusStyle(row.status)}>{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="space-y-5">
          <InfoCard icon={ClipboardList} title="Locker Workflow" items={lockerWorkflow} />
          <InfoCard icon={ShieldCheck} title="Rules and Accountability" items={lockerRules} />
          <div className="rounded-[2rem] bg-plm-green p-6 text-white shadow-soft">
            <QrCode className="mb-4 text-plm-yellow" />
            <p className="text-xl font-black">QR-Coded Locker System</p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Each locker may contain a QR code with locker ID, assignment record, renewal status, and maintenance history for faster monitoring.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

function InfoCard({ icon: Icon, title, items }) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
      <Icon className="mb-4 text-plm-green" />
      <p className="text-xl font-black">{title}</p>
      <div className="mt-4 space-y-3">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3 text-sm font-semibold">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-plm-yellow text-xs font-black text-plm-green">{index + 1}</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
