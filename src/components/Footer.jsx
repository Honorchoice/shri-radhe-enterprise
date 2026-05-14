import React from "react";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="section-shell flex flex-col gap-3 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Shri Radhe Verification. Securing hiring with trusted verification.
        </p>
        <p>Identity checks · Document audits · Compliance reports</p>
      </div>
    </footer>
  );
}

export default Footer;
