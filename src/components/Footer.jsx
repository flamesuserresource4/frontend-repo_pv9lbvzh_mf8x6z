export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <p className="text-slate-900 font-semibold">VerifiAI</p>
          <p className="mt-2 text-sm text-slate-600">AI-powered fake news detection and analytics platform.</p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-medium text-slate-900">Product</p>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-slate-900" href="#verify">Verify</a></li>
            <li><a className="hover:text-slate-900" href="#analytics">Dashboard</a></li>
            <li><a className="hover:text-slate-900" href="#how">How it works</a></li>
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-medium text-slate-900">Legal</p>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-slate-900" href="#">Privacy</a></li>
            <li><a className="hover:text-slate-900" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} VerifiAI. All rights reserved.</div>
    </footer>
  );
}
