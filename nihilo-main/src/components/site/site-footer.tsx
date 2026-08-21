import Link from "next/link";
import { BookCallLink } from "@/components/site/book-call-link";
import { SITE_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-dark-line bg-dark pt-12 pb-7 text-on-dark-muted">
      <div className="mx-auto w-[min(70rem,calc(100%-2.5rem))]">
        <div className="grid gap-7 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex min-h-11 items-center text-[0.8125rem] font-semibold tracking-[0.16em] text-on-dark">
              NIHILO{" "}
              <span className="font-medium tracking-[0.18em] text-on-dark-muted">SOLUTIONS</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm">
              Custom operational automations for growing companies.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-[0.8125rem] font-medium tracking-[0.12em] text-on-dark uppercase">
              Work
            </h2>
            <ul className="text-sm">
              <li>
                <Link href="/what-we-build" className="flex min-h-11 items-center hover:text-on-dark">
                  What we build
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="flex min-h-11 items-center hover:text-on-dark">
                  Use cases
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="flex min-h-11 items-center hover:text-on-dark">
                  How we work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[0.8125rem] font-medium tracking-[0.12em] text-on-dark uppercase">
              Company
            </h2>
            <ul className="text-sm">
              <li>
                <Link href="/who-we-work-with" className="flex min-h-11 items-center hover:text-on-dark">
                  Who we work with
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex min-h-11 items-center hover:text-on-dark">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="flex min-h-11 items-center hover:text-on-dark">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[0.8125rem] font-medium tracking-[0.12em] text-on-dark uppercase">
              Contact
            </h2>
            <ul className="text-sm">
              <li>
                <BookCallLink
                  placement="footer"
                  className="flex min-h-11 items-center hover:text-on-dark"
                >
                  Book a call
                </BookCallLink>
              </li>
              <li>
                <Link href="/contact" className="flex min-h-11 items-center hover:text-on-dark">
                  Contact
                </Link>
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="flex min-h-11 items-center hover:text-on-dark">
                  {SITE_EMAIL}
                </a>
              </li>
              <li className="flex min-h-11 items-center">Connecticut &middot; remote nationwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap justify-between gap-4 border-t border-dark-line pt-4.5 text-[0.8125rem]">
          <span className="inline-flex min-h-11 items-center">&copy; 2026 Nihilo Solutions</span>
          <span className="flex gap-5">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-on-dark">
              Privacy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-on-dark">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
