export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
            P
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Brand</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
            Product
          </a>
          <a href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
            Solutions
          </a>
          <a href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
            Resources
          </a>
        </nav>

        {/* CTA / Action Area */}
        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 md:block">Log in</button>
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};
