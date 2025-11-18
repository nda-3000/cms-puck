export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12 text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Column 1 */}
          <div className="col-span-2 md:col-span-1">
            <span className="mb-4 block text-xl font-bold text-white">Brand</span>
            <p className="text-sm text-slate-400">Making web building easier, one component at a time.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm md:flex-row">
          <p>&copy; 2024 Brand Inc. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="h-5 w-5 rounded-full bg-slate-700"></div>
            <div className="h-5 w-5 rounded-full bg-slate-700"></div>
            <div className="h-5 w-5 rounded-full bg-slate-700"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
