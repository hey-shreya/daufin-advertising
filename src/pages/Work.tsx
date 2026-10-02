import { useState } from "react";
import { CampaignCard, PageIntro, usePageMeta } from "@/components/site/Editorial";
import { campaigns, workFilters } from "@/data/site";
import { cn } from "@/lib/utils";

const layout = ["md:col-span-7", "md:col-span-5 md:mt-24", "md:col-span-12", "md:col-span-5", "md:col-span-7 md:mt-16", "md:col-span-6", "md:col-span-6 md:mt-20"];
const aspects = ["aspect-[4/3]", "aspect-[4/5]", "aspect-[21/9]", "aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[4/3]"];

export default function Work() {
  usePageMeta("Daufin Advertising | Our Work", "Sixteen brand and entertainment collaborations by Daufin Advertising across film, TV, digital, brand integration and PR.");
  const [filter, setFilter] = useState<(typeof workFilters)[number]>("All");
  const visible = filter === "All" ? campaigns : campaigns.filter((c) => c.categories.includes(filter));
  return <>
    <PageIntro eyebrow="Our Work" title="The Work" copy="A selection of brands, stories and cultural connections." />
    <section className="px-5 pb-24 md:px-10 md:pb-32"><div className="mx-auto max-w-[1500px]">
      <div className="mb-14 flex gap-8 overflow-x-auto border-b border-border pb-1" role="group" aria-label="Filter work">
        {workFilters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={cn("shrink-0 border-b-2 pb-4 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-primary", filter === item ? "border-primary text-primary" : "border-transparent text-muted-foreground")}>{item}</button>)}
      </div>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-12">
        {visible.map((c, i) => <div key={c.slug} className={layout[i % layout.length]}><CampaignCard campaign={c} index={campaigns.indexOf(c)} priority={i < 2} aspect={aspects[i % aspects.length]} /></div>)}
      </div>
    </div></section>
  </>;
}
