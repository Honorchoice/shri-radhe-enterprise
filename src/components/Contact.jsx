import React from "react";

function Contact() {
  return (
    <section id="contact" className="pb-16 pt-16 sm:pb-20 sm:pt-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-panel border-slate-800/90 bg-slate-900/85 text-slate-100">
            <p className="section-kicker !text-cyan-300">Start verification</p>
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              Book a demo or request a custom verification plan.
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
              Tell us your hiring priorities and we will match you with the right background check package for fast, compliant onboarding.
            </p>

            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">
              <div>
                <p className="font-bold uppercase tracking-[0.25em] text-slate-400">Email</p>
                <p>contact@shriradheverify.com</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-[0.25em] text-slate-400">Phone</p>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-[0.25em] text-slate-400">Hours</p>
                <p>Mon–Sat, 9:00 AM to 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="card-panel border-slate-800/90 bg-slate-900/85">
            <p className="section-kicker text-cyan-300">Request access</p>
            <h3 className="font-display text-4xl font-semibold text-white">
              Send your verification requirements.
            </h3>
            <form className="mt-8 grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Company</span>
                <input
                  type="text"
                  placeholder="Company name"
                  className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Message</span>
                <textarea
                  rows="5"
                  placeholder="Tell us your verification priorities"
                  className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
