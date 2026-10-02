import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigationType } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Menu, Moon, Sun, X, Youtube } from "lucide-react";
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
  // Jump to top instantly on new pages (no visible scroll-up); keep position on back/forward.
  useLayoutEffect(() => {
    setOpen(false);
    if (navType !== "POP") window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, navType]);

  const ThemeBtn = <Button variant="ghost" size="icon" onClick={toggle} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="rounded-full border border-border">{theme === "dark" ? <Sun /> : <Moon />}</Button>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
          <Link to="/" className="flex h-16 w-32 items-center rounded-sm bg-card py-1" aria-label="Daufin home">
            <img src="/daufin-logo.png" alt="Daufin Advertising" className="h-full w-full object-contain" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <NavLink key={href} to={href} end={href === "/"} className={({ isActive }) => cn("text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground/70")}>{label}</NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {ThemeBtn}
            <Button asChild size="sm" className="hidden uppercase tracking-[0.12em] lg:inline-flex"><Link to="/contact">Start a project <ArrowUpRight /></Link></Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {open && (
          <nav className="min-h-[calc(100vh-5rem)] bg-background px-6 py-10 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col">
              {links.map(([label, href], index) => <NavLink key={href} to={href} className="border-b border-border py-4 font-display text-4xl text-foreground"><span className="mr-4 font-sans text-xs text-primary">0{index + 1}</span>{label}</NavLink>)}
            </div>
          </nav>
        )}
      </header>
      <main className="pt-20"><div key={location.pathname} className="route-fade"><Outlet /></div></main>
      <footer className="border-t border-border bg-background text-foreground">
        <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Link to="/" className="flex h-16 w-32 items-center rounded-sm bg-card py-1" aria-label="Daufin home"><img src="/daufin-logo.png" alt="Daufin Advertising" className="h-full w-full object-contain" /></Link>
            <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">{links.map(([l, h]) => <Link key={h} to={h} className="text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-primary">{l}</Link>)}</nav>
            <div className="flex gap-4 text-muted-foreground" aria-label="Social links"><Instagram className="h-5 w-5" /><Linkedin className="h-5 w-5" /><Youtube className="h-5 w-5" /></div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:justify-between">
            <span>© 2026 Daufin Advertising. Where brands meet culture.</span><span>DAUFIN Advertising · Mumbai</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
