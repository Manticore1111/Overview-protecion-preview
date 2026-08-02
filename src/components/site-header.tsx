"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Waarden", href: "/#waarden" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 w-full px-6 sm:px-8 lg:px-12">
      <header className="panel pointer-events-auto border-[rgba(212,175,55,0.16)] !bg-black backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <Link className="flex items-center gap-4" href="/" aria-label="Ga naar homepage">
            <div className="w-[320px] overflow-hidden lg:w-[360px]">
              <img
                src="/Nieuwe%20logo%20balk.png"
                alt="Overview Protection"
                className="block h-[72px] w-auto min-w-[320px] object-contain opacity-95 drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)] lg:h-[82px] lg:min-w-[360px]"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-xs font-medium uppercase tracking-[0.18em] text-[#b7b7b7] md:flex lg:gap-8 lg:text-sm">
            {navItems.map((item) => {
              const isActive = item.href === "/over-ons" ? pathname === "/over-ons" : pathname === "/";

              return (
                <Link
                  key={item.href}
                  className={`transition hover:text-[var(--accent)] ${isActive ? "text-[var(--accent)]" : ""}`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </div>
  );
}