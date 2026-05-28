export type ProductImageKey =
  | "foxtail-pack"
  | "barnyard-pack"
  | "browntop-pack"
  | "little-pack"
  | "kodo-pack";

export type Product = {
  name: string;
  description: string;
  image?: ProductImageKey;
  packSize: string;
  benefits: string[];
};

export const phoneNumber = "+91 9618296518";
export const whatsappNumber = "919618296518";
export const instagramHandle = "annavyafoods";
export const facebookHandle = "annavyafoods";

export const certifications = ["Organic Certified", "ISO Certified", "FSSAI Certified", "Lab Tested"];

export const trustMetrics = [
  { value: "30 KG+", label: "Bulk order minimum" },
  { value: "Pan India", label: "Distribution coverage" },
  { value: "Direct", label: "Farmer sourcing model" },
  { value: "Premium", label: "Traditional millet quality" },
];

export const products: Product[] = [
  {
    name: "Foxtail Millet",
    description: "A premium heritage millet with a clean golden grain, ideal for modern Indian kitchens, wellness-led menus, and bulk retail supply.",
    image: "foxtail-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["Rich in fiber", "Supports weight balance", "Naturally gluten free"],
  },
  {
    name: "Barnyard Millet",
    description: "Light, versatile, and traditionally valued for fasting meals and nutrient-dense staples, sourced directly from farming communities.",
    image: "barnyard-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["Low glycemic profile", "Easy to cook", "Mineral rich"],
  },
  {
    name: "Browntop Millet",
    description: "A rare traditional millet celebrated for clean-label premium positioning and naturally wholesome nutrition.",
    image: "browntop-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["High dietary fiber", "Traditional grain", "Wellness-focused"],
  },
  {
    name: "Little Millet",
    description: "An ancient Indian millet with delicate grain structure, suited for porridges, upma, rice alternatives, and health-forward food brands.",
    image: "little-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["Iron supportive", "Quick cooking", "Everyday staple"],
  },
  {
    name: "Kodo Millet",
    description: "Earthy and hearty, Kodo Millet is a reliable bulk choice for traditional meal programs, clean eating brands, and export-ready blends.",
    image: "kodo-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["Fiber dense", "Wholesome texture", "Traditional nutrition"],
  },
  {
    name: "Ragi",
    description: "A trusted calcium-rich finger millet for family nutrition, healthy mixes, and wholesale supply chains.",
    packSize: "bulk sacks",
    benefits: ["Calcium rich", "Family nutrition", "Versatile flour use"],
  },
  {
    name: "Jowar",
    description: "A resilient Indian grain suited for rotis, flour programs, and premium healthy food manufacturing.",
    packSize: "bulk sacks",
    benefits: ["Naturally hearty", "Good for daily diets", "Multi-format usage"],
  },
  {
    name: "Bajra",
    description: "A time-honored millet with deep agricultural roots, ideal for winter nutrition and nutrient-rich staples.",
    packSize: "bulk sacks",
    benefits: ["Energy supportive", "Traditional Indian grain", "Rustic flavor"],
  },
  {
    name: "Proso Millet",
    description: "A clean, adaptable millet for healthy product lines, bulk food service, and premium grain assortments.",
    packSize: "bulk sacks",
    benefits: ["Light texture", "Clean-label appeal", "Fast cooking"],
  },
];

export const processSteps = [
  {
    title: "Direct farmer relationships",
    copy: "We work close to millet-growing communities and source at the farm level to preserve traceability, trust, and rural value creation.",
  },
  {
    title: "Careful cleaning and grading",
    copy: "Each grain batch is handled with disciplined sorting, cleaning, and quality checks for premium consistency in retail and bulk supply.",
  },
  {
    title: "Lab-tested assurance",
    copy: "Our millet range is checked for quality benchmarks so distributors, retailers, and conscious families buy with confidence.",
  },
  {
    title: "Delivered from farm to family",
    copy: "The result is a premium millet portfolio rooted in Indian agricultural heritage and designed for modern healthy lifestyles.",
  },
];

export const benefits = [
  {
    title: "Everyday wellness",
    copy: "Millets support balanced living with naturally rich fiber, plant nutrition, and clean energy for daily meals.",
  },
  {
    title: "Traditional Indian nutrition",
    copy: "These grains have nourished Indian households for generations, long before processed foods became the norm.",
  },
  {
    title: "Modern healthy eating",
    copy: "Perfect for porridges, dosas, rotis, millet rice, snacks, and premium wellness-oriented food products.",
  },
  {
    title: "Sustainable agriculture",
    copy: "Millets are climate-aware crops that fit naturally into conversations around soil health, water efficiency, and responsible sourcing.",
  },
];

export const blogPosts = [
  {
    title: "Why traditional Indian millets are returning to modern kitchens",
    excerpt: "A look at how heritage grains are becoming the foundation of premium healthy food brands and family nutrition routines.",
    slug: "traditional-indian-millets-modern-kitchens",
  },
  {
    title: "How direct farmer sourcing improves millet quality and trust",
    excerpt: "From traceability to cleaner procurement, direct sourcing helps distributors and families choose grain with more confidence.",
    slug: "direct-farmer-millet-sourcing-quality",
  },
  {
    title: "Foxtail, Barnyard, Kodo and more: choosing the right millet for your needs",
    excerpt: "Understand the role of each millet variety in retail, wholesale, food service, and healthy everyday cooking.",
    slug: "choosing-the-right-millet-variety",
  },
];

export const seoKeywords = [
  "Premium Millet Supplier India",
  "Bulk Millet Supplier",
  "Organic Millet Supplier",
  "Foxtail Millet Wholesale",
  "Traditional Indian Millets",
  "Direct Farmer Millets",
  "Healthy Millet Products",
];
