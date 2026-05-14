function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_30%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(15,23,42,0.92))]" />
      <div className="section-shell relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="relative z-10">
          <p className="section-kicker text-cyan-300">Secure hiring, verified fast</p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Background verification built for
            <span className="block text-cyan-300">trust, speed, and compliance.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Shri Radhe Verification helps businesses screen candidates, verify identities, and complete compliance checks — including education documents, criminal records, and UAN/Aadhaar/PAN validation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-cyan-400 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 bg-slate-900/90 px-6 py-4 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Speak With Sales
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="card-panel border-slate-700/80 bg-slate-900/80">
              <p className="text-3xl font-extrabold text-cyan-300">99.8%</p>
              <p className="mt-2 text-sm text-slate-300">Accuracy in identity and document checks.</p>
            </div>
            <div className="card-panel border-slate-700/80 bg-slate-900/80">
              <p className="text-3xl font-extrabold text-cyan-300">24h</p>
              <p className="mt-2 text-sm text-slate-300">Turnaround on most standard verification reports.</p>
            </div>
            <div className="card-panel border-slate-700/80 bg-slate-900/80">
              <p className="text-3xl font-extrabold text-cyan-300">100+</p>
              <p className="mt-2 text-sm text-slate-300">Trusted business checks completed every month.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="card-panel overflow-hidden rounded-[32px] border border-slate-700/80 bg-slate-900/85 p-8 shadow-soft backdrop-blur">
            <div className="space-y-6">
              <div className="grid gap-3 rounded-[28px] border border-cyan-500/20 bg-slate-950/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
                  Risk profile
                </p>
                <p className="text-3xl font-semibold text-white">
                  Verified, compliant, and ready to act.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-slate-700/80 bg-slate-950/80 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                    Identity check
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Confirmed credentials across trusted sources.
                  </p>
                </div>
                <div className="rounded-[28px] border border-slate-700/80 bg-slate-950/80 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                    Document audit
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Clean review of credentials, addresses, and experience.
                  </p>
                </div>
              </div>
              <div className="rounded-[28px] border border-cyan-500/20 bg-slate-950/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Live dashboard
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Track request status, results, and verification history in one secure place.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-[28px] border border-cyan-500/20 bg-slate-900/95 p-6 text-slate-300 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Trusted by HR teams
            </p>
            <p className="mt-3 text-sm leading-6">
              Fast reports, clear findings, and a partner focused on reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
