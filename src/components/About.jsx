import React from "react";

const highlights = [
  "Verified data from trusted sources",
  "Paperless process with fast onboarding",
  "Secure reporting for HR and compliance teams",
  "Dedicated support for every request",
];

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-panel border-slate-800/90 bg-slate-900/85 text-slate-100">
          <p className="section-kicker !text-cyan-300">Our process</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A modern verification workflow for confident hiring.
          </h2>
          <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
            Shri Radhe Verification combines expert review, deep identity checks, and compliance-ready documentation so businesses can onboard candidates with clarity and care.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="card-panel border-slate-800/90 bg-slate-900/85">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Why businesses choose us
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-slate-800/70 bg-slate-950/80 p-5"
                >
                  <p className="text-sm font-semibold leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card-panel border-slate-800/90 bg-slate-900/85">
              <p className="font-display text-4xl font-semibold text-cyan-300">01</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Fast verifications without sacrificing accuracy.</p>
            </div>
            <div className="card-panel border-slate-800/90 bg-slate-900/85">
              <p className="font-display text-4xl font-semibold text-cyan-300">02</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">A confidential, secure onboarding experience.</p>
            </div>
            <div className="card-panel border-slate-800/90 bg-slate-900/85">
              <p className="font-display text-4xl font-semibold text-cyan-300">03</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Clear reports that simplify hiring decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
