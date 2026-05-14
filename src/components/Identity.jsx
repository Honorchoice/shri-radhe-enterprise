import React from "react";

const checks = [
  {
    title: "Education Document Check",
    description:
      "Authenticate academic and professional certificates to verify qualifications.",
  },
  {
    title: "Criminal Record Search",
    description:
      "Screen candidates against trusted police and clearance databases for safe hiring.",
  },
  {
    title: "UAN / Aadhaar / PAN",
    description:
      "Confirm identity and employment records using government-issued identifiers.",
  },
];

function Identity() {
  return (
    <section id="identity" className="py-16 sm:py-20">
      <div className="section-shell">
        <p className="section-kicker text-cyan-300">Verification Identity</p>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="section-title text-slate-100">
              Identity verification designed for compliance and confidence.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Our verification identity services help HR and operations teams validate credentials quickly, securely, and accurately.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-cyan-500/15 bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Streamlined process</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Submit details, review findings, and take action with clear verification outcomes.
                </p>
              </div>
              <div className="rounded-[28px] border border-cyan-500/15 bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Secure handling</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Sensitive identity data is handled with strict confidentiality and encrypted storage.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {checks.map((check) => (
              <div key={check.title} className="card-panel border-slate-800/90 bg-slate-900/80 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-800/90">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 shadow-soft">
                  <span className="text-xl">✔</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                  {check.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {check.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[28px] border border-cyan-500/15 bg-slate-950/80 p-5 text-slate-300">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Step 1</p>
            <p className="mt-2 text-lg font-semibold text-white">Submit your candidate details</p>
          </div>
          <div className="rounded-[28px] border border-cyan-500/15 bg-slate-950/80 p-5 text-slate-300">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Step 2</p>
            <p className="mt-2 text-lg font-semibold text-white">Run identity and document checks</p>
          </div>
          <div className="rounded-[28px] border border-cyan-500/15 bg-slate-950/80 p-5 text-slate-300">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Step 3</p>
            <p className="mt-2 text-lg font-semibold text-white">Review reports and take action</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Identity;
