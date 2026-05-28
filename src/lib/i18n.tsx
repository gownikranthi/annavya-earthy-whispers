import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Languages } from "lucide-react";

export type Lang = "en" | "hi";

// Basic Indian English -> Hindi dictionary.
// Keys are the source English strings used in components.
const dict: Record<string, string> = {
  // Header / nav
  "Home": "होम",
  "About": "हमारे बारे में",
  "Products": "उत्पाद",
  "Farmers": "किसान",
  "Health Benefits": "स्वास्थ्य लाभ",
  "Blog": "ब्लॉग",
  "Contact": "संपर्क",
  "Call Now": "कॉल करें",
  "WhatsApp": "व्हाट्सऐप",
  "WhatsApp Inquiry": "व्हाट्सऐप पर पूछें",
  "Annavya Foods": "अन्नव्या फूड्स",
  "From farm to family": "खेत से परिवार तक",
  "Language": "भाषा",

  // Hero
  "Premium Millet Supplier · India": "प्रीमियम मिलेट सप्लायर · भारत",
  "From Indian soil to your family plate — pure heritage millets.": "भारत की मिट्टी से आपके परिवार की थाली तक — शुद्ध पारंपरिक मिलेट।",
  "premium heritage millets": "शुद्ध पारंपरिक मिलेट",
  "Annavya Foods gives you millets sourced directly from Indian farmers. Pure quality, traditional taste, and modern healthy living — for families, shops, and bulk buyers across India.":
    "अन्नव्या फूड्स आपको भारतीय किसानों से सीधे मिलेट देता है। शुद्ध गुणवत्ता, पारंपरिक स्वाद और आधुनिक स्वस्थ जीवन — परिवार, दुकान और थोक खरीदारों के लिए, पूरे भारत में।",

  // Trust labels
  "Organic Certified": "ऑर्गेनिक प्रमाणित",
  "ISO Certified": "ISO प्रमाणित",
  "FSSAI Certified": "FSSAI प्रमाणित",
  "Lab Tested": "लैब टेस्टेड",
  "Bulk order minimum": "थोक ऑर्डर न्यूनतम",
  "Distribution coverage": "वितरण क्षेत्र",
  "Direct": "सीधा",
  "Farmer sourcing model": "किसान से सीधा स्रोत",
  "Premium": "प्रीमियम",
  "Traditional millet quality": "पारंपरिक मिलेट गुणवत्ता",
  "Pan India": "पूरे भारत में",

  // Intro band
  "Brand story": "हमारी कहानी",
  "A premium Indian millet brand rooted in traditional farming.": "पारंपरिक खेती में बसा एक प्रीमियम भारतीय मिलेट ब्रांड।",
  "We highlight real farmers, real sourcing and real quality. So every inquiry starts with full trust.":
    "हम असली किसान, असली स्रोत और असली गुणवत्ता दिखाते हैं। इसलिए हर पूछताछ पूरे भरोसे से शुरू होती है।",
  "This is not a shopping site. This is a trusted inquiry-first millet brand for families, retailers and distributors.":
    "यह कोई शॉपिंग साइट नहीं है। यह परिवार, दुकानदार और वितरकों के लिए भरोसेमंद मिलेट ब्रांड है, जहाँ पहले बात होती है।",

  // Process
  "Farm to family": "खेत से परिवार",
  "A clean process for premium millet supply.": "प्रीमियम मिलेट सप्लाई के लिए साफ-सुथरी प्रक्रिया।",
  "Direct farmer relationships": "सीधा किसान संबंध",
  "We work with millet farming families and buy directly at the farm. This keeps trust, traceability and farmer income strong.":
    "हम मिलेट किसान परिवारों के साथ काम करते हैं और खेत पर ही खरीदते हैं। इससे भरोसा, पारदर्शिता और किसान आय मज़बूत रहती है।",
  "Careful cleaning and grading": "ध्यान से सफाई और छँटाई",
  "Every grain batch is cleaned, sorted and checked. So retail and bulk buyers always get the same premium quality.":
    "हर अनाज को साफ किया जाता है, छाँटा जाता है और जाँचा जाता है। ताकि हर ग्राहक को एक जैसी प्रीमियम गुणवत्ता मिले।",
  "Lab tested quality": "लैब टेस्टेड गुणवत्ता",
  "Our millet range is lab tested for quality. So families and distributors can buy with full confidence.":
    "हमारी मिलेट रेंज लैब टेस्टेड है। ताकि परिवार और वितरक पूरे भरोसे के साथ खरीद सकें।",
  "Delivered from farm to family": "खेत से परिवार तक डिलीवरी",
  "The result is a premium millet range with deep Indian roots, made for modern healthy living.":
    "नतीजा एक प्रीमियम मिलेट रेंज है, जिसकी जड़ें भारतीय हैं और जो आधुनिक स्वस्थ जीवन के लिए बनी है।",

  // Product section
  "Millet categories": "मिलेट श्रेणियाँ",
  "Selected millet varieties for premium retail and bulk supply.": "प्रीमियम रिटेल और थोक सप्लाई के लिए चुनी हुई मिलेट किस्में।",
  "View all products": "सभी उत्पाद देखें",
  "Available in": "उपलब्ध है",
  "Traditional grain": "पारंपरिक अनाज",

  // Product names
  "Foxtail Millet": "फॉक्सटेल मिलेट (कांगनी)",
  "Barnyard Millet": "बार्नयार्ड मिलेट (सावा)",
  "Browntop Millet": "ब्राउनटॉप मिलेट",
  "Little Millet": "लिटिल मिलेट (कुटकी)",
  "Kodo Millet": "कोदो मिलेट",
  "Ragi": "रागी",
  "Jowar": "ज्वार",
  "Bajra": "बाजरा",
  "Proso Millet": "प्रोसो मिलेट (चेना)",

  // Product copy
  "A premium heritage millet with clean golden grain. Best for modern Indian kitchens, healthy menus and bulk retail supply.":
    "साफ सुनहरे दानों वाला एक प्रीमियम पारंपरिक मिलेट। आधुनिक भारतीय रसोई, हेल्दी मेनू और थोक सप्लाई के लिए सबसे अच्छा।",
  "Light and easy millet, used traditionally for fasting and pure meals. Sourced directly from farming families.":
    "हल्का और आसान मिलेट, परंपरा से व्रत और शुद्ध भोजन में उपयोगी। सीधे किसान परिवारों से लाया गया।",
  "A rare traditional millet, known for clean-label quality and natural wholesome nutrition.":
    "एक दुर्लभ पारंपरिक मिलेट, साफ-सुथरी गुणवत्ता और प्राकृतिक पोषण के लिए जाना जाता है।",
  "An ancient Indian millet with fine grain. Good for porridge, upma, rice replacement and healthy food brands.":
    "बारीक दानों वाला पुराना भारतीय मिलेट। दलिया, उपमा, चावल के विकल्प और हेल्दी फूड ब्रांड के लिए अच्छा।",
  "Earthy and filling, Kodo Millet is a strong bulk choice for traditional meals, clean food brands and export blends.":
    "मिट्टी जैसा स्वाद और पेट भरने वाला, कोदो मिलेट थोक भोजन, क्लीन फूड ब्रांड और निर्यात मिश्रण के लिए मज़बूत विकल्प है।",
  "A trusted calcium-rich finger millet for family nutrition, healthy mixes and wholesale supply.":
    "परिवार के पोषण, हेल्दी मिक्स और थोक सप्लाई के लिए भरोसेमंद, कैल्शियम से भरपूर रागी।",
  "A strong Indian grain for rotis, flour and healthy food making.":
    "रोटी, आटा और हेल्दी फूड बनाने के लिए मज़बूत भारतीय अनाज।",
  "An old Indian millet with deep farming roots. Best for winter food and nutrition.":
    "गहरी कृषि जड़ों वाला पुराना भारतीय मिलेट। सर्दियों के भोजन और पोषण के लिए सबसे अच्छा।",
  "A clean and useful millet for healthy product lines, food service and premium grain mixes.":
    "हेल्दी प्रोडक्ट लाइन, फूड सर्विस और प्रीमियम अनाज मिक्स के लिए साफ और उपयोगी मिलेट।",

  // Benefits chips
  "Rich in fiber": "फाइबर से भरपूर",
  "Supports weight balance": "वज़न संतुलन में मददगार",
  "Naturally gluten free": "प्राकृतिक रूप से ग्लूटेन फ्री",
  "Low glycemic profile": "कम ग्लाइसेमिक",
  "Easy to cook": "पकाने में आसान",
  "Mineral rich": "मिनरल से भरपूर",
  "High dietary fiber": "उच्च फाइबर",
  "Wellness-focused": "स्वास्थ्य पर केंद्रित",
  "Iron supportive": "आयरन में मददगार",
  "Quick cooking": "जल्दी पकने वाला",
  "Everyday staple": "रोज़ का अनाज",
  "Fiber dense": "घना फाइबर",
  "Wholesome texture": "पौष्टिक बनावट",
  "Traditional nutrition": "पारंपरिक पोषण",
  "Calcium rich": "कैल्शियम से भरपूर",
  "Family nutrition": "परिवार का पोषण",
  "Versatile flour use": "आटे में बहुउपयोगी",
  "Naturally hearty": "स्वाभाविक रूप से भारी",
  "Good for daily diets": "रोज़ की डाइट के लिए अच्छा",
  "Multi-format usage": "कई तरह से उपयोग",
  "Energy supportive": "ऊर्जा देने वाला",
  "Traditional Indian grain": "पारंपरिक भारतीय अनाज",
  "Rustic flavor": "देसी स्वाद",
  "Light texture": "हल्की बनावट",
  "Clean-label appeal": "क्लीन-लेबल अपील",
  "Fast cooking": "जल्दी पकने वाला",

  // Health section
  "Healthy lifestyle": "स्वस्थ जीवन",
  "A healthier grain choice for modern Indian living.": "आधुनिक भारतीय जीवन के लिए स्वस्थ अनाज का विकल्प।",
  "Everyday wellness": "रोज़ का स्वास्थ्य",
  "Millets help in balanced living with natural fiber, plant nutrition and clean energy for daily meals.":
    "मिलेट प्राकृतिक फाइबर, पौधों के पोषण और साफ ऊर्जा के साथ रोज़ के संतुलित जीवन में मदद करते हैं।",
  "Traditional Indian nutrition": "पारंपरिक भारतीय पोषण",
  "These grains have been feeding Indian families for many generations, long before packaged foods came.":
    "ये अनाज पैकेज्ड फूड आने से बहुत पहले से ही पीढ़ियों तक भारतीय परिवारों का पोषण कर रहे हैं।",
  "Modern healthy eating": "आधुनिक हेल्दी खानपान",
  "Best for porridge, dosa, roti, millet rice, snacks and premium health-focused food products.":
    "दलिया, डोसा, रोटी, मिलेट चावल, स्नैक्स और प्रीमियम हेल्थ फूड के लिए सबसे अच्छा।",
  "Sustainable farming": "सतत खेती",
  "Millets are climate-friendly crops. They fit well with soil health, water saving and responsible sourcing.":
    "मिलेट जलवायु-अनुकूल फसलें हैं। ये मिट्टी की सेहत, पानी की बचत और ज़िम्मेदार स्रोत के साथ अच्छे से जुड़ते हैं।",
  "Why buyers inquire": "खरीदार क्यों पूछते हैं",
  "Premium healthy millet products for homes, shops and distributors.": "घर, दुकान और वितरकों के लिए प्रीमियम हेल्दी मिलेट उत्पाद।",
  "Good for daily clean eating and wellness food products.": "रोज़ के साफ खानपान और हेल्थ फूड प्रोडक्ट के लिए अच्छा।",
  "Traditional Indian grains with strong feeling and good nutrition.": "मज़बूत भावना और अच्छे पोषण वाले पारंपरिक भारतीय अनाज।",
  "Useful in breakfast, daily meals, ready mixes and wholesale grain programs.": "नाश्ता, रोज़ के खाने, रेडी मिक्स और थोक अनाज कार्यक्रमों में उपयोगी।",
  "Explore health benefits": "स्वास्थ्य लाभ देखें",

  // Farmers
  "Real farming families are the heart of this brand.": "असली किसान परिवार ही इस ब्रांड का दिल हैं।",
  "Our sourcing keeps farmers visible, respected and at the centre of the story. This human connection builds trust and shows buyers where their grain truly comes from.":
    "हमारा स्रोत किसानों को दिखाई देने वाला, सम्मानित और कहानी के केंद्र में रखता है। यह मानवीय जुड़ाव भरोसा बनाता है और खरीदारों को अनाज का असली स्रोत दिखाता है।",
  "From traditional farms to modern families, every grain carries a story of soil, care and trust.": "पारंपरिक खेतों से आधुनिक परिवारों तक, हर अनाज मिट्टी, देखभाल और भरोसे की कहानी कहता है।",
  "Why it matters": "क्यों ज़रूरी है",
  "Direct sourcing builds trust, clear information and a premium story for healthy food supply.": "सीधा स्रोत भरोसा, साफ जानकारी और हेल्दी फूड सप्लाई के लिए प्रीमियम कहानी बनाता है।",
  "For partners": "साझेदारों के लिए",
  "A strong sourcing story helps retailers and distributors show millet as premium, responsible and rooted.": "मज़बूत स्रोत-कहानी रिटेलर और वितरकों को मिलेट को प्रीमियम, ज़िम्मेदार और जड़ों से जुड़ा दिखाने में मदद करती है।",

  // Bulk
  "Bulk orders": "थोक ऑर्डर",
  "Built for bulk distributor inquiries and large supply.": "थोक वितरक पूछताछ और बड़ी सप्लाई के लिए बना।",
  "We take bulk orders from 30 KG and supply across India. Whether you are a distributor, retailer, wholesaler or health food brand, we give you millet with premium quality and trusted supply.":
    "हम 30 किलो से थोक ऑर्डर लेते हैं और पूरे भारत में सप्लाई करते हैं। आप वितरक हों, दुकानदार हों, थोक व्यापारी हों या हेल्थ फूड ब्रांड — हम आपको प्रीमियम गुणवत्ता और भरोसेमंद सप्लाई वाला मिलेट देते हैं।",
  "Minimum order": "न्यूनतम ऑर्डर",
  "Bulk supply starts from 30 KG.": "थोक सप्लाई 30 किलो से शुरू।",
  "Coverage": "क्षेत्र",
  "Supplies available across India.": "पूरे भारत में सप्लाई उपलब्ध।",
  "Bulk WhatsApp Inquiry": "थोक के लिए व्हाट्सऐप पूछताछ",
  "Distributor Contact": "वितरक संपर्क",

  // Blog
  "Stories that build trust on millet, health and sourcing.": "मिलेट, स्वास्थ्य और स्रोत पर भरोसा बनाने वाली कहानियाँ।",
  "View all articles": "सभी लेख देखें",
  "Knowledge article": "जानकारी लेख",
  "Why traditional Indian millets are coming back to modern kitchens": "पारंपरिक भारतीय मिलेट आधुनिक रसोई में वापस क्यों आ रहे हैं",
  "A look at how old grains are becoming the base of premium healthy food brands and family nutrition.": "एक नज़र इस पर कि कैसे पुराने अनाज प्रीमियम हेल्दी फूड ब्रांड और परिवार के पोषण का आधार बन रहे हैं।",
  "How direct farmer sourcing improves millet quality and trust": "सीधा किसान स्रोत मिलेट की गुणवत्ता और भरोसा कैसे बढ़ाता है",
  "From clear tracking to cleaner buying, direct sourcing helps distributors and families choose grain with more confidence.": "साफ ट्रैकिंग से लेकर साफ खरीद तक, सीधा स्रोत वितरकों और परिवारों को भरोसे से अनाज चुनने में मदद करता है।",
  "Foxtail, Barnyard, Kodo and more — how to choose the right millet": "फॉक्सटेल, बार्नयार्ड, कोदो और अन्य — सही मिलेट कैसे चुनें",
  "Understand the role of each millet in retail, wholesale, food service and daily healthy cooking.": "हर मिलेट की भूमिका को रिटेल, थोक, फूड सर्विस और रोज़ की हेल्दी कुकिंग में समझें।",

  // Contact
  "Start an inquiry for premium millet supply.": "प्रीमियम मिलेट सप्लाई के लिए पूछताछ शुरू करें।",
  "Reach out for WhatsApp inquiries, bulk distributor talks, phone help and millet product discussions.": "व्हाट्सऐप पूछताछ, थोक वितरक बातचीत, फ़ोन सहायता और मिलेट उत्पाद चर्चा के लिए संपर्क करें।",
  "Fastest way to talk about product, bulk orders and distribution.": "उत्पाद, थोक ऑर्डर और वितरण पर बात करने का सबसे तेज़ तरीका।",
  "Call us directly for quick help and inquiry talks.": "जल्दी सहायता और पूछताछ के लिए हमें सीधे कॉल करें।",
  "Phone": "फ़ोन",
  "Instagram": "इंस्टाग्राम",
  "Facebook": "फेसबुक",
  "Follow real farmer stories, product moments and brand updates.": "असली किसान कहानियाँ, उत्पाद पल और ब्रांड अपडेट देखें।",
  "Connect with the brand and inquire through social media.": "सोशल मीडिया पर ब्रांड से जुड़ें और पूछताछ करें।",

  // Footer
  "Premium modern Indian millet sourcing rooted in traditional farming.": "पारंपरिक खेती में बसा प्रीमियम आधुनिक भारतीय मिलेट स्रोत।",
  "Annavya Foods is a premium millet supplier in India. We focus on trust, clean sourcing and traditional grain quality. We support distributors, healthy food brands and families with direct farmer millets, certified processing and premium products.":
    "अन्नव्या फूड्स भारत में एक प्रीमियम मिलेट सप्लायर है। हम भरोसा, साफ स्रोत और पारंपरिक अनाज की गुणवत्ता पर ध्यान देते हैं। हम वितरक, हेल्दी फूड ब्रांड और परिवारों को सीधे किसान मिलेट, प्रमाणित प्रोसेसिंग और प्रीमियम उत्पाद देते हैं।",
  "Quick Links": "त्वरित लिंक",
  "Connect": "जुड़ें",
  "WhatsApp inquiries": "व्हाट्सऐप पूछताछ",
  "Supplies across India": "पूरे भारत में सप्लाई",

  // Page heroes
  "An Indian millet brand built on heritage, careful sourcing and premium trust.": "विरासत, सावधान स्रोत और प्रीमियम भरोसे पर बना एक भारतीय मिलेट ब्रांड।",
  "Annavya Foods presents traditional Indian millets with care, real sourcing and a strong farm-to-family story for modern healthy living and distribution.": "अन्नव्या फूड्स पारंपरिक भारतीय मिलेट को देखभाल, असली स्रोत और मज़बूत खेत-से-परिवार कहानी के साथ पेश करता है।",
  "Direct farmer millet sourcing that keeps things real.": "सीधा किसान स्रोत जो सब कुछ असली रखता है।",
  "The brand story starts in the field. By keeping farmers at the centre, Annavya Foods shows honesty, rural value and a deeper premium grain promise.": "ब्रांड की कहानी खेत से शुरू होती है। किसानों को केंद्र में रखकर, अन्नव्या फूड्स ईमानदारी, ग्रामीण मूल्य और गहरा प्रीमियम वादा दिखाता है।",
  "A premium millet range made for health-loving families and bulk buyers.": "हेल्थ-प्रेमी परिवारों और थोक खरीदारों के लिए बनी प्रीमियम मिलेट रेंज।",
  "See our millet range — Foxtail, Barnyard, Kodo, Browntop, Little, Ragi, Jowar, Bajra and Proso — with premium quality and trusted sourcing.": "हमारी मिलेट रेंज देखें — फॉक्सटेल, बार्नयार्ड, कोदो, ब्राउनटॉप, लिटिल, रागी, ज्वार, बाजरा और प्रोसो — प्रीमियम गुणवत्ता और भरोसेमंद स्रोत के साथ।",
  "Traditional grains that fit today's healthy life.": "आज के स्वस्थ जीवन में फिट पारंपरिक अनाज।",
  "Millets are loved for their good nutrition, easy use and balanced daily diet. Annavya Foods gives them to you with premium quality, cultural depth and trusted sourcing.": "मिलेट अपने अच्छे पोषण, आसान उपयोग और संतुलित डाइट के लिए जाने जाते हैं। अन्नव्या फूड्स इन्हें प्रीमियम गुणवत्ता, सांस्कृतिक गहराई और भरोसेमंद स्रोत के साथ देता है।",
  "Inquiry-first support for millet buyers, distributors and health food brands.": "मिलेट खरीदार, वितरक और हेल्थ फूड ब्रांड के लिए पहले-पूछताछ सपोर्ट।",
  "For product questions, bulk order talks and distributor interest — connect with Annavya Foods on WhatsApp, phone, Instagram or Facebook.": "उत्पाद से जुड़े सवाल, थोक ऑर्डर बातचीत और वितरक रुचि के लिए — अन्नव्या फूड्स से व्हाट्सऐप, फ़ोन, इंस्टाग्राम या फेसबुक पर जुड़ें।",
  "Stories and insights on millets, wellness and Indian farming heritage.": "मिलेट, स्वास्थ्य और भारतीय कृषि विरासत पर कहानियाँ और जानकारी।",
  "This content layer builds organic search visibility and helps visitors understand the nutrition, culture and sourcing depth of the Annavya Foods brand.": "यह सामग्री खोज में दिखने में मदद करती है और दर्शकों को अन्नव्या फूड्स ब्रांड का पोषण, संस्कृति और स्रोत समझाती है।",
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("annavya-lang") as Lang | null;
      if (saved === "hi" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        try { localStorage.setItem("annavya-lang", l); } catch {}
        if (typeof document !== "undefined") document.documentElement.lang = l === "hi" ? "hi" : "en";
      },
      t: (key) => (lang === "hi" ? dict[key] ?? key : key),
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) return { lang: "en" as Lang, setLang: () => {}, t: (s: string) => s };
  return ctx;
}

export function useT() {
  return useI18n().t;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:rgba(15,29,20,0.5)] p-1 text-xs ${className}`}
      role="group"
      aria-label="Language"
    >
      <Languages className="ml-2 h-3.5 w-3.5 text-[color:var(--brand-gold-soft)]" />
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-[var(--gradient-gold)] text-[color:var(--primary-foreground)]"
            : "text-[color:var(--muted-ink)] hover:text-[color:var(--paper)]"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hi")}
        className={`rounded-full px-2.5 py-1 font-devanagari transition-colors ${
          lang === "hi"
            ? "bg-[var(--gradient-gold)] text-[color:var(--primary-foreground)]"
            : "text-[color:var(--muted-ink)] hover:text-[color:var(--paper)]"
        }`}
        aria-pressed={lang === "hi"}
      >
        हिं
      </button>
    </div>
  );
}
