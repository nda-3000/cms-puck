import { Button } from '../ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white text-slate-900 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 font-bold text-white">P</div>
          <span className="text-xl font-bold tracking-tight">Brand</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Button variant="ghost">Product</Button>
          <Button variant="ghost">Solutions</Button>
          <Button variant="ghost">Resources</Button>
        </nav>

        {/* CTA / Action Area */}
        <div className="flex items-center gap-4">
          <Button variant="ghost">Log in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};
