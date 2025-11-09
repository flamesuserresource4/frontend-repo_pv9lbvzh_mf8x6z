import { ShieldCheck, Bell, Activity } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-tr from-blue-600 via-cyan-500 to-emerald-400 text-white shadow-md">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 text-lg tracking-tight">VerifiAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#verify" className="hover:text-slate-900 transition">Verify</a>
          <a href="#analytics" className="hover:text-slate-900 transition">Analytics</a>
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600" aria-label="Activity">
            <Activity className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button className="ml-1 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm shadow hover:bg-slate-800">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
