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
    description:
      "A premium heritage millet with clean golden grain. Best for modern Indian kitchens, healthy menus and bulk retail supply.",
    image: "foxtail-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["Rich in fiber", "Supports weight balance", "Naturally gluten free"],
  },
  {
    name: "Barnyard Millet",
    description:
      "Light and easy millet, used traditionally for fasting and pure meals. Sourced directly from farming families.",
    image: "barnyard-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["Low glycemic profile", "Easy to cook", "Mineral rich"],
  },
  {
    name: "Browntop Millet",
    description:
      "A rare traditional millet, known for clean-label quality and natural wholesome nutrition.",
    image: "browntop-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["High dietary fiber", "Traditional grain", "Wellness-focused"],
  },
  {
    name: "Little Millet",
    description:
      "An ancient Indian millet with fine grain. Good for porridge, upma, rice replacement and healthy food brands.",
    image: "little-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["Iron supportive", "Quick cooking", "Everyday staple"],
  },
  {
    name: "Kodo Millet",
    description:
      "Earthy and filling, Kodo Millet is a strong bulk choice for traditional meals, clean food brands and export blends.",
    image: "kodo-pack",
    packSize: "500 g / 1 kg / bulk sacks",
    benefits: ["Fiber dense", "Wholesome texture", "Traditional nutrition"],
  },
  {
    name: "Ragi",
    description:
      "A trusted calcium-rich finger millet for family nutrition, healthy mixes and wholesale supply.",
    packSize: "bulk sacks",
    benefits: ["Calcium rich", "Family nutrition", "Versatile flour use"],
  },
  {
    name: "Jowar",
    description: "A strong Indian grain for rotis, flour and healthy food making.",
    packSize: "bulk sacks",
    benefits: ["Naturally hearty", "Good for daily diets", "Multi-format usage"],
  },
  {
    name: "Bajra",
    description: "An old Indian millet with deep farming roots. Best for winter food and nutrition.",
    packSize: "bulk sacks",
    benefits: ["Energy supportive", "Traditional Indian grain", "Rustic flavor"],
  },
  {
    name: "Proso Millet",
    description:
      "A clean and useful millet for healthy product lines, food service and premium grain mixes.",
    packSize: "bulk sacks",
    benefits: ["Light texture", "Clean-label appeal", "Fast cooking"],
  },
];

export const processSteps = [
  {
    title: "Direct farmer relationships",
    copy: "We work with millet farming families and buy directly at the farm. This keeps trust, traceability and farmer income strong.",
  },
  {
    title: "Careful cleaning and grading",
    copy: "Every grain batch is cleaned, sorted and checked. So retail and bulk buyers always get the same premium quality.",
  },
  {
    title: "Lab tested quality",
    copy: "Our millet range is lab tested for quality. So families and distributors can buy with full confidence.",
  },
  {
    title: "Delivered from farm to family",
    copy: "The result is a premium millet range with deep Indian roots, made for modern healthy living.",
  },
];

export const benefits = [
  {
    title: "Everyday wellness",
    copy: "Millets help in balanced living with natural fiber, plant nutrition and clean energy for daily meals.",
  },
  {
    title: "Traditional Indian nutrition",
    copy: "These grains have been feeding Indian families for many generations, long before packaged foods came.",
  },
  {
    title: "Modern healthy eating",
    copy: "Best for porridge, dosa, roti, millet rice, snacks and premium health-focused food products.",
  },
  {
    title: "Sustainable farming",
    copy: "Millets are climate-friendly crops. They fit well with soil health, water saving and responsible sourcing.",
  },
];

export const blogPosts = [
  {
    title: "Why traditional Indian millets are coming back to modern kitchens",
    excerpt:
      "A look at how old grains are becoming the base of premium healthy food brands and family nutrition.",
    slug: "traditional-indian-millets-modern-kitchens",
  },
  {
    title: "How direct farmer sourcing improves millet quality and trust",
    excerpt:
      "From clear tracking to cleaner buying, direct sourcing helps distributors and families choose grain with more confidence.",
    slug: "direct-farmer-millet-sourcing-quality",
  },
  {
    title: "Foxtail, Barnyard, Kodo and more — how to choose the right millet",
    excerpt:
      "Understand the role of each millet in retail, wholesale, food service and daily healthy cooking.",
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
