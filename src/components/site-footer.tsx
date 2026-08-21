import { Link } from "@tanstack/react-router";
import { SITE_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-dark-line bg-dark pt-12 pb-7 text-on-dark-muted">
      <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
        <div className="grid gap-7 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="text-[0.8125rem] font-semibold tracking-[0.16em] text-on-dark">
              NIHILO <span className="font-medium tracking-[0.18em] text-on-dark-muted">SOLUTIONS</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm">
              Custom operational automations for growing companies.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-[0.8125rem] font-medium tracking-[0.12em] text-on-dark uppercase">
              Work
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/what-we-build" className="hover:text-on-dark">
                  What we build
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="hover:text-on-dark">
                  Use cases
                </Link>
              </li>
              <li>
                <Link to="/how-we-work" className="hover:text-on-dark">
                  How we work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[0.8125rem] font-medium tracking-[0.12em] text-on-dark uppercase">
              Company
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/who-we-work-with" className="hover:text-on-dark">
                  Who we work with
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-on-dark">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-on-dark">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[0.8125rem] font-medium tracking-[0.12em] text-on-dark uppercase">
              Contact
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" hash="book" className="hover:text-on-dark">
                  Book a call
                </Link>
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-on-dark">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>Connecticut · remote nationwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-9 flex justify-between gap-4 border-t border-dark-line pt-4.5 text-[0.8125rem]">
          <span>© 2026 Nihilo Solutions</span>
          <Link to="/privacy" className="hover:text-on-dark">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
