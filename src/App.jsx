import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Verifier from "./components/Verifier";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Verifier />
        <Analytics />
        <section id="how" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ingest",
                desc: "Collect headlines, articles, and URLs from users and integrated feeds.",
              },
              {
                title: "Analyze",
                desc: "Run NLP models to score credibility and extract key claims and entities.",
              },
              {
                title: "Monitor",
                desc: "Visualize trends, sources, and regions to surface emerging narratives.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white shadow-sm">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
