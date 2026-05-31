import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";

const steps = ["Received", "Under Review", "Endorsed", "Resolved", "Closed"];

export default function Concerns() {
  const [type, setType] = useState("Academic");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <PageHeader
        title="Student Concern Desk"
        subtitle="A structured concern submission and tracking mechanism for transparent student representation."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <p className="text-xl font-black text-plm-green">Submit a Concern</p>
          <div className="mt-5 space-y-4">
            <Field label="Concern Type">
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-2xl border p-3 outline-none focus:border-plm-green">
                {["Academic", "Clinical", "Administrative", "Student Affairs", "Facilities", "Other"].map((x) => <option key={x}>{x}</option>)}
              </select>
            </Field>
            <Field label="Name">
              <input className="w-full rounded-2xl border p-3 outline-none focus:border-plm-green" placeholder="Student Name / Optional Anonymous" />
            </Field>
            <Field label="PLM Email">
              <input type="email" className="w-full rounded-2xl border p-3 outline-none focus:border-plm-green" placeholder="student@plm.edu.ph" />
            </Field>
            <Field label="Concern Details">
              <textarea className="min-h-32 w-full rounded-2xl border p-3 outline-none focus:border-plm-green" placeholder={`Describe your ${type.toLowerCase()} concern...`} />
            </Field>
            <button className="w-full rounded-2xl bg-plm-green px-5 py-3 font-black text-white shadow-lg transition hover:bg-plm-greenDark">
              Submit Concern
            </button>
            {submitted && (
              <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
                Concern submitted in prototype mode. Connect this form to a backend database for official deployment.
              </div>
            )}
          </div>
        </form>

        <section className="rounded-[2rem] bg-plm-green p-6 text-white shadow-soft">
          <p className="text-2xl font-black">Concern Tracking Framework</p>
          <p className="mt-3 leading-relaxed text-white/75">
            This workflow helps the student council and college offices receive, verify, endorse, resolve, and archive student concerns.
          </p>
          <div className="mt-6 grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-plm-yellow font-black text-plm-green">{index + 1}</div>
                <div>
                  <p className="font-black">{step}</p>
                  <p className="text-sm text-white/70">Status update visible to authorized CN administrators and student representatives.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-zinc-700">{label}</span>
      {children}
    </label>
  );
}
