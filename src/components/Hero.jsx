import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8 py-16">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/60 backdrop-blur px-3 py-1 text-xs text-slate-700 shadow">
            Real-time misinformation intelligence
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Verify news with AI. Instantly.
          </h1>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed">
            VerifiAI scores credibility, explains why, and visualizes trends across the web.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#verify" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800">
              Start Verifying
            </a>
            <a href="#analytics" className="inline-flex items-center justify-center rounded-lg bg-white/80 backdrop-blur text-slate-900 px-5 py-3 text-sm font-medium border border-slate-200 shadow hover:bg-white">
              View Dashboard
            </a>
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
