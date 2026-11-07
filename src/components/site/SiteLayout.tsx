import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigationType } from "react-router-dom";
import { ArrowUpRight, Menu, Moon, Sun, X, Mail, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Work", "/work"], ["Contact", "/contact"]
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navType = useNavigationType();
  const { theme, toggle } = useTheme();

  useEffect(() => { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; }, []);
  useLayoutEffect(() => {
    setOpen(false);
    if (navType !== "POP") window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, navType]);

  const ThemeBtn = (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border border-border"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Nav ── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-5 md:px-10">
          <Link to="/" className="flex h-[4.5rem] items-center py-1.5" aria-label="Daufin home">
            <img
              src="/daufin-logo.png"
              alt="Daufin Advertising"
              width={320}
              height={248}
              className="h-full w-auto object-contain dark:brightness-[1.9] dark:saturate-[1.1]"
            />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                end={href === "/"}
                className={({ isActive }) =>
                  cn("text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground/70")
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {ThemeBtn}
            <Button asChild size="sm" className="hidden uppercase tracking-[0.12em] lg:inline-flex">
              <Link to="/contact">Start a project <ArrowUpRight /></Link>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav className="min-h-[calc(100vh-6rem)] bg-background px-6 py-10 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col">
              {links.map(([label, href], index) => (
                <NavLink key={href} to={href} className="border-b border-border py-4 font-display text-4xl text-foreground">
                  <span className="mr-4 font-sans text-xs text-primary">0{index + 1}</span>{label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="pt-24">
        <div key={location.pathname} className="route-fade">
          <Outlet />
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-background text-foreground">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-20">
          {/* Logo + tagline centred */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Link to="/" className="flex h-20 items-center" aria-label="Daufin home">
              <img
                src="/daufin-logo.png"
                alt="Daufin Advertising"
                width={320}
                height={248}
                className="h-full w-auto object-contain dark:brightness-[1.9] dark:saturate-[1.1]"
              />
            </Link>
            <p className="font-display text-2xl text-foreground md:text-3xl">Where brands meet culture.</p>
          </div>

          {/* Contact info — big, centred, prominent */}
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Get in touch</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center gap-2.5 font-sans text-lg font-semibold text-primary transition-opacity hover:opacity-80 md:text-xl"
            >
              <Mail className="h-5 w-5 shrink-0" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 font-sans text-lg font-semibold text-primary transition-opacity hover:opacity-80 md:text-xl"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-center text-xs uppercase tracking-[0.12em] text-muted-foreground md:flex-row md:justify-between md:text-left">
            <span>© {new Date().getFullYear()} Daufin Advertising</span>
            <span>DAUFIN Advertising · Mumbai</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
