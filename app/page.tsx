export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_60px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <header className="row-start-1 w-full max-w-6xl">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-wide text-slate-800">Seven Sister</h1>
          <div className="hidden sm:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-slate-800 transition-colors">Equipment</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Services</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Projects</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col gap-12 row-start-2 items-center text-center max-w-5xl">
        <div className="space-y-6">
          <h2 className="text-5xl sm:text-6xl font-light text-slate-800 leading-tight">
            Dam Equipment
            <span className="block text-blue-600 font-medium">Solutions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Providing reliable, high-quality dam equipment and engineering solutions 
            across Canada. From turbines to control systems, we deliver the technology 
            that powers your infrastructure projects.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded border-2 border-blue-600 transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 font-medium text-sm sm:text-base h-12 px-8 min-w-[180px]"
            href="#"
          >
            Request Quote
          </a>
          <a
            className="rounded border-2 border-slate-300 transition-colors flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 font-medium text-sm sm:text-base h-12 px-8 min-w-[180px] text-slate-700"
            href="#"
          >
            View Equipment
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-16 w-full max-w-4xl">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <div className="text-2xl font-semibold text-blue-600 mb-2">Turbines</div>
            <div className="text-sm text-slate-600">High-efficiency water turbines for optimal power generation</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <div className="text-2xl font-semibold text-blue-600 mb-2">Gates</div>
            <div className="text-sm text-slate-600">Durable spillway and intake gate systems</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <div className="text-2xl font-semibold text-blue-600 mb-2">Controls</div>
            <div className="text-sm text-slate-600">Advanced monitoring and control systems</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <div className="text-2xl font-semibold text-blue-600 mb-2">Support</div>
            <div className="text-sm text-slate-600">Installation, maintenance and technical support</div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg w-full max-w-4xl mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-3xl font-semibold text-slate-800">25+</div>
              <div className="text-sm text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-semibold text-slate-800">200+</div>
              <div className="text-sm text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-semibold text-slate-800">24/7</div>
              <div className="text-sm text-slate-600 font-medium">Technical Support</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-8 flex-wrap items-center justify-center text-sm text-slate-500">
        <a className="hover:text-slate-700 transition-colors" href="#">Equipment Catalog</a>
        <a className="hover:text-slate-700 transition-colors" href="#">Case Studies</a>
        <a className="hover:text-slate-700 transition-colors" href="#">Technical Documentation</a>
        <a className="hover:text-slate-700 transition-colors" href="#">Support Portal</a>
      </footer>
    </div>
  );
}