import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow, usePageMeta } from "@/components/site/Editorial";

const NotFound = () => {
  usePageMeta("Page not found | Daufin Advertising", "This page could not be found.");
  return (
    <section className="px-5 py-28 md:px-10 md:py-40"><div className="mx-auto max-w-[1500px]">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-display text-6xl leading-[0.92] md:text-8xl">This page has left the <span className="italic text-primary">frame.</span></h1>
      <Link to="/" className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-bold uppercase tracking-[0.15em] hover:border-primary hover:text-primary">Return home <ArrowRight className="h-4 w-4" /></Link>
    </div></section>
  );
};

export default NotFound;
