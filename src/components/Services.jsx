import React from "react";

const services = [
  {
    title: "Education Document Check",
    description:
      "Verify academic credentials, certificates, and qualification documents with precision.",
  },
  {
    title: "Criminal Record Check",
    description:
      "Screen for criminal history using secure local and national data sources.",
  },
  {
    title: "UAN / Aadhaar / PAN Verification",
    description:
      "Validate government IDs and employment identifiers for compliance and payroll readiness.",
  },
  {
    title: "Employee Screening",
    description:
      "Complete background checks for candidates, contractors, and hourly staff.",
  },
];

function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="section-shell">
        <p className="section-kicker text-cyan-300">What We Do</p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="section-title text-slate-100">
              Professional background verification for safer hiring.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            We blend human review with digital verification to deliver insights that help companies hire with confidence.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card-panel group relative overflow-hidden border-slate-800/90 bg-slate-900/80 transition duration-500 hover:-translate-y-1 hover:bg-slate-800/90"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition duration-500 group-hover:bg-cyan-300/15" />
              <p className="text-sm font-bold text-cyan-300">0{index + 1}</p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
