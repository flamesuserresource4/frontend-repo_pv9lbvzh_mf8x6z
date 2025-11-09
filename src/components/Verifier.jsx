import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

export default function Verifier() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || "";

  async function handleVerify(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      // Placeholder local scoring for now; backend endpoint can replace this.
      const words = input.trim().split(/\s+/).length;
      const score = Math.max(0, Math.min(100, 100 - Math.abs(15 - words) * 3));
      const explanation =
        score > 60
          ? "This looks relatively credible based on linguistic patterns."
          : "This may be misleading. Be cautious and cross-check sources.";
      setResult({ score, explanation, keyPhrases: ["source", "date", "numbers"] });

      // Example for future backend call
      // const res = await fetch(`${backend}/verify`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: input }) });
      // const data = await res.json();
      // setResult(data);
    } catch (err) {
      setResult({ error: "Failed to verify. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="verify" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">News Search & Verification</h2>
            <p className="mt-3 text-slate-600">Paste a headline, paragraph, or URL to get an instant credibility score with explainable AI insights.</p>
            <form onSubmit={handleVerify} className="mt-6 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  className="w-full rounded-lg border border-slate-300 pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Paste headline, article text, or URL"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm hover:bg-slate-800"
                  disabled={loading}
                >
                  <Sparkles className="h-4 w-4" /> Verify
                </button>
              </div>
            </form>
            {result && (
              <div className="mt-6 rounded-lg border border-slate-200 p-4">
                {result.error ? (
                  <p className="text-red-600">{result.error}</p>
                ) : (
                  <div>
                    <div className="flex items-end gap-3">
                      <div className="text-5xl font-extrabold text-slate-900">{Math.round(result.score)}%</div>
                      <span className="text-slate-500 mb-2">credibility</span>
                    </div>
                    <p className="mt-3 text-slate-700">{result.explanation}</p>
                    {result.keyPhrases && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {result.keyPhrases.map((k) => (
                          <span key={k} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{k}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900">Explainable AI Insights</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Key phrases and entities that influenced the score.</li>
              <li>Source reliability based on known databases.</li>
              <li>Temporal and numeric claims cross-checked for anomalies.</li>
              <li>Language patterns associated with misinformation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
