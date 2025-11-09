import { useMemo } from "react";
import { Activity, TrendingUp, Globe } from "lucide-react";

function Stat({ icon: Icon, label, value, trend }) {
  return (
    <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="text-xl font-semibold text-slate-900">{value}</p>
        </div>
        {trend && (
          <span className={`ml-auto text-xs font-medium ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
}

export default function Analytics() {
  // Mock data for visualization; replace with API data later
  const chartData = useMemo(
    () => [
      { label: "Politics", value: 42 },
      { label: "Health", value: 26 },
      { label: "Finance", value: 18 },
      { label: "Science", value: 14 },
    ],
    []
  );

  const max = Math.max(...chartData.map((d) => d.value));

  return (
    <section id="analytics" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Fake News Dashboard</h2>
            <p className="mt-3 text-slate-600">Track misinformation by category, source, and region.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <Stat icon={Activity} label="Items flagged (24h)" value="1,248" trend={12} />
          <Stat icon={TrendingUp} label="High-risk sources" value="87" trend={-4} />
          <Stat icon={Globe} label="Affected regions" value="32" trend={6} />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Trends by category</h3>
            <div className="mt-4 space-y-3">
              {chartData.map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <span className="w-24 text-sm text-slate-600">{d.label}</span>
                  <div className="flex-1 h-3 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                      style={{ width: `${(d.value / max) * 100}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-sm text-slate-600">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Recent suspicious items</h3>
            <ul className="mt-4 divide-y divide-slate-100">
              {[
                { title: "Miracle cure for debt goes viral", source: "Unknown Blog" },
                { title: "Election date changed next week", source: "Random Forum" },
                { title: "New tax abolishes salaries", source: "Fake News Site" },
              ].map((item) => (
                <li key={item.title} className="py-3">
                  <p className="font-medium text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-500">Source: {item.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
