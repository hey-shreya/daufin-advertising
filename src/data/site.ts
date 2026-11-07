export type WorkCategory = "Digital" | "Film & TV" | "Brand Integration" | "PR & Media";
export const workFilters = ["All", "Digital", "Film & TV", "Brand Integration"] as const;

export type Campaign = {
  slug: string;
  client: string;
  property: string;
  categories: WorkCategory[];
  /** Real campaign artwork only. Leave undefined until the supplied visual is added — a typographic cover is shown instead. */
  image?: string;
  gallery?: string[];
  tagline: string;
  shortDescription: string;
  objective: string;
  connection: string;
  campaign?: string;
  activation?: string[];
  impact?: string;
  artworkLine?: string;
  /** Verified external links supplied by Daufin only. */
  links?: CampaignLink[];
};

export type CampaignLink = { label: string; url: string; type: "video" | "article" };

export const campaigns: Campaign[] = [
  { slug: "bru-aisha", links: [{ label: "WATCH PROMO", url: "https://www.youtube.com/watch?v=X982oxBOhn0", type: "video" }], image: "/work/bru-aisha.jpg", client: "BRU", property: "Aisha", categories: ["Brand Integration", "Film & TV", "Digital"],
    tagline: "When coffee became part of the story.",
    artworkLine: "ब्रू से होती हैं खुशियाँ शुरू !",
    shortDescription: "Coffee moments, friendship and discovery for a young urban audience.",
    objective: "Connect BRU's coffee positioning with a young, urban audience through a contemporary film.",
    connection: "Coffee moments became a natural part of a story about friendship and discovery.",
    campaign: "The integration extended from the screen into a multi-touchpoint campaign.",
    activation: ["Co-branded TV activity", "Online activation", "Contest", "PR", "Facebook application", "BRU × Aisha merchandise"] },
  { slug: "micromax-housefull", links: [{ label: "WATCH PROMO", url: "https://www.youtube.com/watch?v=w94A9XGYQT0", type: "video" }], image: "/work/micromax-housefull.jpg", client: "Micromax", property: "Housefull", categories: ["Brand Integration", "Film & TV"],
    tagline: "A brand inside the entertainment.",
    artworkLine: "Ever imagined that you could control 3 things at the same time?",
    shortDescription: "Micromax connected with a mainstream entertainment property.",
    objective: "Place Micromax within a mainstream entertainment property.",
    connection: "The partnership linked the Micromax brand with the Housefull film audience." },
  { slug: "zen-break-ke-baad", links: [{ label: "WATCH PROMO", url: "https://www.youtube.com/watch?v=c7TYuw7FWrQ", type: "video" }], image: "/work/zen-break-ke-baad.jpg", client: "Zen Mobile", property: "Break Ke Baad", categories: ["Brand Integration", "Film & TV"],
    tagline: "Product × Character × Story.",
    artworkLine: "Stays a following",
    shortDescription: "A mobile product integrated into the film's story and character context.",
    objective: "Integrate the Zen mobile product into the world of the film.",
    connection: "The product was placed within the story and the context of its characters." },
  { slug: "eno-yamla-pagla-deewana", links: [{ label: "WATCH PROMO", url: "https://www.youtube.com/watch?v=woAGE7h3Gl0", type: "video" }], image: "/work/eno-yamla-pagla-deewana.jpg", client: "ENO", property: "Yamla Pagla Deewana", categories: ["Brand Integration", "Film & TV"],
    tagline: "A natural fit for a food-loving comedy.",
    artworkLine: "In Punjab do as the Punjabis do!",
    shortDescription: "ENO connected with the film's food and digestive-comedy context.",
    objective: "Connect ENO with a popular entertainment property.",
    connection: "The brand fit naturally into the film's food and digestive-comedy context." },
  { slug: "parker-pens-aarakshan", links: [{ label: "WATCH PROMO", url: "https://www.youtube.com/watch?v=iYDvqxqUV00", type: "video" }], image: "/work/parker-pens-aarakshan.jpg", client: "Parker Pens", property: "Aarakshan", categories: ["Brand Integration", "Film & TV"],
    tagline: "Brand values, written into character.",
    artworkLine: "A Pen the world respects",
    shortDescription: "Parker aligned with Aarakshan through professor character positioning.",
    objective: "Associate Parker's brand values with a meaningful film.",
    connection: "Parker × Aarakshan × professor character positioning × brand values." },
  { slug: "himani-fast-relief-golmaal-3", links: [{ label: "WATCH PROMO", url: "https://www.youtube.com/watch?v=G-tLfsUeeZ0", type: "video" }], image: "/work/himani-fast-relief-golmaal-3.jpg", client: "Himani Fast Relief", property: "Golmaal 3", categories: ["Brand Integration", "Film & TV"],
    tagline: "Too many pangas? Too much pain?",
    artworkLine: "Too many pangas? Too much pain?",
    shortDescription: "Fast Relief met a comedy full of chaos.",
    objective: "Connect Fast Relief with the comic energy of Golmaal 3.",
    connection: "The campaign artwork linked the film's 'pangas' with Fast Relief's pain-relief proposition." },
  { slug: "tbz-saheb-biwi", image: "/work/tbz-saheb-biwi.jpg", client: "TBZ", property: "Saheb Biwi Aur Gangster Returns", categories: ["Brand Integration", "Film & TV"],
    tagline: "For that royal touch, only the best will do.",
    artworkLine: "For that royal touch — only the best will do",
    shortDescription: "TBZ jewellery met a story of royalty.",
    objective: "Associate TBZ with the royal world of the film.",
    connection: "The campaign connected the film's royal setting with TBZ's jewellery." },
  { slug: "monster-transformers", image: "/work/monster-transformers.jpg", client: "Monster Energy", property: "Transformers", categories: ["Brand Integration", "Film & TV"],
    tagline: "Energy meets spectacle.",
    artworkLine: "Unleash The Beast",
    shortDescription: "An experiential activation built around a global action franchise.",
    objective: "Bring Monster Energy and Transformers together through experiential activation.",
    connection: "The brand's energy aligned with the film's large-scale spectacle.",
    activation: ["Multi-city promotion", "Mall / multiplex engagement", "Product sampling", "Branded installations", "Contests", "Merchandise"] },
  { slug: "air-asia-thank-you", image: "/work/air-asia-thank-you.jpg", client: "Air Asia", property: "Thank You", categories: ["Brand Integration", "Film & TV"],
    tagline: "A ground activation built around 'Thank You'.",
    shortDescription: "A ground activation connecting Air Asia with the film.",
    objective: "Connect Air Asia with the film through a ground activation.",
    connection: "The 'Thank You' idea linked the film's title with the airline's experience." },
  { slug: "maac-amazing-spiderman", links: [{ label: "WATCH PROMO", url: "https://youtu.be/rI-QusUUjrg?si=Ksfc9gjjnhM2wroA", type: "video" }], image: "/work/maac-amazing-spiderman.png", client: "MAAC Animation Academy", property: "The Amazing Spider-Man", categories: ["Brand Integration", "Film & TV"],
    tagline: "Animation, VFX and a superhero.",
    artworkLine: "Create your own World of Imagination",
    shortDescription: "MAAC × animation / VFX × The Amazing Spider-Man.",
    objective: "Connect an animation academy with a VFX-driven blockbuster.",
    connection: "MAAC × animation / VFX × The Amazing Spider-Man × entertainment." },
  { slug: "godrej-roy", links: [{ label: "WATCH PROMO", url: "https://www.youtube.com/watch?v=7zw-TgoqkTE", type: "video" }], image: "/work/godrej-roy.jpg", client: "Godrej Security Solutions", property: "Roy", categories: ["Brand Integration", "Film & TV", "Digital"],
    tagline: "When thieves become intelligent.",
    artworkLine: "When thieves become intelligent, you need intelligent security solutions.",
    shortDescription: "Security × cinema × digital.",
    objective: "Connect Godrej Security Solutions with a film about a clever thief.",
    connection: "Security × cinema × digital.",
    activation: ["Co-branded cinema AV", "Digital campaign", "Social media", "YouTube", "Other digital platforms"] },
  { slug: "shree-cement-tanhaji", links: [{ label: "WATCH CO-BRANDED PROMO", url: "https://youtu.be/-FXskRVMBP0", type: "video" }], image: "/work/shree-cement-tanhaji.jpg", client: "Shree Cement", property: "Tanhaji", categories: ["Brand Integration", "Film & TV"],
    tagline: "Celebrating the taakat.",
    artworkLine: "Celebrating the taakat",
    shortDescription: "Strength × valour × brand × film.",
    objective: "Connect Shree Cement's strength with a film about valour.",
    connection: "Strength × valour × brand × film.",
    activation: ["TV", "Outdoor", "Retail"] },
  { slug: "springfit-shaadi-ke-side-effects", image: "/work/springfit-shaadi-ke-side-effects.jpg", client: "Springfit Mattress", property: "Shaadi Ke Side Effects", categories: ["Brand Integration", "Film & TV"],
    tagline: "A comfortable fit for married life.",
    artworkLine: "Life Feels great on Springfit Mattress",
    shortDescription: "Springfit Mattress met a comedy about marriage.",
    objective: "Connect Springfit Mattress with a film about married life.",
    connection: "The brand's home-comfort role suited the film's look at marriage." },
  { slug: "wow-badhaai-do", image: "/work/wow-badhaai-do.png", client: "WOW Skin Science", property: "Badhaai Do", categories: ["Brand Integration", "Digital"],
    tagline: "Brand integration + digital + social.",
    artworkLine: "Be WOW, Naturally",
    shortDescription: "A film partnership extended across digital and social.",
    objective: "Connect WOW Skin Science with Badhaai Do across film, digital and social.",
    connection: "Brand integration + digital + social." },
  { slug: "lg-scarlet-love-story-2050", links: [{ label: "WATCH CO-BRANDED PROMO", url: "http://youtu.be/nmYn1MOazFA", type: "video" }], image: "/work/lg-scarlet-love-story-2050.jpg", client: "LG Scarlet", property: "Love Story 2050", categories: ["Brand Integration", "Film & TV"],
    tagline: "The co-branded promo.",
    artworkLine: "Capture the magical moments on Scarlet — the ultimate seduction",
    shortDescription: "A co-branded promo bringing LG Scarlet together with Love Story 2050.",
    objective: "Create the co-branded promo for LG Scarlet × Love Story 2050.",
    connection: "The co-branded promo connected LG Scarlet with Love Story 2050." },
  { slug: "lux-love-story-2050", image: "/work/lux-love-story-2050.jpg", client: "LUX", property: "Love Story 2050", categories: ["Brand Integration", "Film & TV"],
    tagline: "A magic mirror of skin beauty.",
    artworkLine: "For soft fragrant skin with floral beauty oil",
    shortDescription: "LUX Strawberry & Cream brand integration with Love Story 2050.",
    objective: "Connect LUX Strawberry & Cream with the futuristic romance Love Story 2050.",
    connection: "Positioning LUX beauty care alongside the film's leading talent and visual spectacle." },
  { slug: "horses-stable", links: [
      { label: "READ DNA INDIA FEATURE", url: "https://www.dnaindia.com/entertainment/video-horse-stable-realityfunding-show-will-allow-bright-minds-to-showcase-their-innovative-ideassuniel-shetty-2959107", type: "article" },
      { label: "READ THE PIONEER FEATURE", url: "https://www.dailypioneer.com/2022/sunday-edition/talktime------theexcitement-is-not-because-they-are-entrepreneurs-but-juniors---.html", type: "article" }
    ], image: "/daufin-logo.png", client: "Horses Stable", property: "PR Onboarding", categories: ["PR & Media"],
    tagline: "Bright minds, innovative ideas.",
    shortDescription: "PR onboarding for Horses Stable, the Indian format of Shark Tank.",
    objective: "Lead PR onboarding for Horses Stable, the Indian format of Shark Tank.",
    connection: "PR and media coverage introduced the show and its bright, innovative minds." },
];

export const campaignName = (c: Campaign) => `${c.client} × ${c.property}`;

export const WHATSAPP_NUMBER = "919930706359";
export const WHATSAPP_DISPLAY = "+91 9930706359";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = "Daufinadvertising@gmail.com";

export const services = [
  { number: "01", title: "Branded Entertainment", text: "Connecting brands with entertainment properties across film, television, OTT, digital, music and experiential.", detail: ["Film", "Television", "OTT", "Digital", "Music", "Branded content"] },
  { number: "02", title: "Brand Integration", text: "Making brands part of stories, characters, films, television and entertainment campaigns — as with BRU × Aisha and Zen Mobile × Break Ke Baad.", detail: ["Stories", "Characters", "Films", "Television", "Content partnerships"] },
  { number: "03", title: "Digital Campaigns", text: "Digital extensions that carry a partnership further — as with Godrej × Roy across social and YouTube.", detail: ["Digital campaigns", "Social activations", "Online contests", "Digital extensions", "Content amplification"] },
  { number: "04", title: "Experiential", text: "Ground activations and live experiences — as with Monster Energy × Transformers and Air Asia × Thank You.", detail: ["Ground activations", "Launches", "Mall / multiplex activations", "Sampling", "Brand installations", "Print / outdoor"] },
];

export const method = [
  ["01", "Discover", "Understand the brand, its audience and its goals."],
  ["02", "Connect", "Find the entertainment or content property that fits."],
  ["03", "Integrate", "Build the brand into the story naturally."],
  ["04", "Amplify", "Extend across TV, digital, retail and ground."],
  ["05", "Impact", "Leave a connection audiences remember."],
];

export const leaders = [
  { name: "Dhiraj Jadhav", role: "CEO & Founder", bio: [
    "Experienced media, syndication professional with over 10 years experience.",
    "Handled media buying for major news channels.",
    "Founded media, teleshopping & syndication business.",
    "Multiple client portfolio.",
  ] },
  { name: "Sharda Ratnam", role: "Co-Founder", bio: [
    "Marketing & Media professional with over 15 years experience in Advertising, Broadcast & TV, Retail & Branded Entertainment.",
    "Founded TGA as a holistic Branded Content company creating IPR, original content & integrated solutions to corporate brands & entertainment partners.",
  ] },
];
