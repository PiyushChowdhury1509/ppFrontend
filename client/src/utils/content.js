import ArrowSwap from "../components/icons/ArrowSwap";
import CardSlash from "../components/icons/CardSlash";
import Cloud from "../components/icons/Cloud";
import DollarCircle from "../components/icons/DollarCircle";
import Import from "../components/icons/Import";
import Integrate from "../components/icons/Integrate";
import MagicPen from "../components/icons/MagicPen";
import Microphone from "../components/icons/Microphone";
import Note from "../components/icons/Note";
import Organization from "../components/icons/Organization";
import Search from "../components/icons/Search";
import Slack from "../components/icons/Slack";
import SMSNotification from "../components/icons/SMSNotification";
import TwoUsers from "../components/icons/TwoUsers";
import Lock from "../components/icons/Lock";

const navigationLinks = [
  {
    id: 1,
    link: "Home",
    href: "#",
  },
  {
    id: 2,
    link: "AI",
    href: "#",
  },
  {
    id: 3,
    link: "About",
    href: "#",
  },
  {
    id: 4,
    link: "Privacy Policy",
    href: "#",
  },
];

const reviews = [
  {
    id: 1,
    src: new URL("../assets/headshots/img-11.webp", import.meta.url),
    alt: "Aman",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    alt: "Emily",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    alt: "Daniel",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    alt: "Sarah",
  },
  {
    id: 5,
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    alt: "Vinayak",
  },
];

const logos = [
  {
    id: 1,
    src: new URL("../assets/logos/Netflix.webp", import.meta.url),
    alt: "Netflix Logo",
  },
  {
    id: 2,
    src: new URL("../assets/logos/ExxonMobile.webp", import.meta.url),
    alt: "Exxon Mobile Logo",
  },
  {
    id: 3,
    src: new URL("../assets/logos/Microsoft.webp", import.meta.url),
    alt: "Microsoft Logo",
  },
  {
    id: 4,
    src: new URL("../assets/logos/Vice.webp", import.meta.url),
    alt: "Vice Logo",
  },
  {
    id: 5,
    src: new URL("../assets/logos/Walmart.webp", import.meta.url),
    alt: "Walmart Logo",
  },
  {
    id: 6,
    src: new URL("../assets/logos/Chase.webp", import.meta.url),
    alt: "Chase Logo",
  },
  {
    id: 7,
    src: new URL("../assets/logos/Visa.webp", import.meta.url),
    alt: "Visa Logo",
  },
  {
    id: 8,
    src: new URL("../assets/logos/Amazon.webp", import.meta.url),
    alt: "Amazon Logo",
  },
];

const frequentlyAskedQuestions = [
  {
    category: "General",
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Note Icon",
        Icon: Note,
        question: "What is Dress360?",
        answer:
          "Dress360 is an AI-powered fashion e-commerce platform that provides personalized outfit recommendations, curated just for you. From sarees to streetwear, Dress360 styles it your way.",
      },
      {
        id: 2,
        alt: "Magic Pen Icon",
        Icon: MagicPen,
        question: "How does the AI stylist work?",
        answer:
          "Our AI chatbot analyzes your preferences, body type, recent trends, and occasion to recommend clothing that suits you perfectly. It even suggests accessories and combinations for complete looks!",
      },
      {
        id: 3,
        alt: "Two Users Icon",
        Icon: TwoUsers,
        question: "Can I get recommendations for gifting?",
        answer:
          "Yes! Whether it’s a birthday or a wedding, just tell our AI chatbot the occasion and recipient's taste, and we’ll give you curated suggestions tailored for them.",
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: Cloud,
        question: "Is Dress360 accessible on mobile devices?",
        answer:
          "Definitely! Our website and app are mobile-friendly, ensuring you can shop and style on the go, wherever you are.",
      },
    ],
  },
  {
    id: 2,
    category: "Pricing",
    questions: [
      {
        id: 5,
        alt: "Dollar Circle Icon",
        Icon: DollarCircle,
        question: "Is the AI stylist free to use?",
        answer:
          "Yes! Our AI fashion stylist is completely free to use for all users. Simply sign up and start chatting with our stylist bot anytime.",
      },
      {
        id: 6,
        alt: "Card Slash Icon",
        Icon: CardSlash,
        question: "Are there any subscription plans?",
        answer:
          "Dress360 offers a free tier with AI styling. We also offer a premium 'Stylist+’ subscription for early access to new collections, virtual try-on, and live expert chats.",
      },
      {
        id: 7,
        alt: "Arrow Swap Icon",
        Icon: ArrowSwap,
        question: "Can I return products?",
        answer:
          "Absolutely! We have a 7-day no-questions-asked return policy on most items. Exchanges are also available.",
      },
      {
        id: 8,
        alt: "Lock Icon",
        Icon: Lock,
        question: "Is my payment information secure?",
        answer:
          "Yes, your security is our priority. We use encrypted payment gateways and follow strict data privacy policies.",
      },
    ],
  },
  {
    id: 3,
    category: "Features",
    questions: [
      {
        id: 9,
        alt: "Organization Icon",
        Icon: Organization,
        question: "What is the Try & Style feature?",
        answer:
          "Our AI stylist recommends outfits based on your profile, and the Try & Style feature visualizes how it looks on a virtual avatar resembling you.",
      },
      {
        id: 10,
        alt: "SMS Notification Icon",
        Icon: SMSNotification,
        question: "How do I receive trend updates?",
        answer:
          "Dress360 keeps you ahead of trends by sending curated suggestions and seasonal collections via SMS and email.",
      },
      {
        id: 11,
        alt: "Microphone Icon",
        Icon: Microphone,
        question:
          "Can I describe what I want through voice?",
        answer:
          "Yes! Use voice search to tell our chatbot what you’re looking for—like 'blue lehenga for wedding'—and get instant suggestions.",
      },
      {
        id: 12,
        alt: "Search Icon",
        Icon: Search,
        question:
          "Can I search by occasion or mood?",
        answer:
          "Yes! Search by event type (e.g. college fest, Diwali, brunch) or mood (bold, casual, elegant), and our AI will do the rest.",
      },
    ],
  },
  {
    id: 4,
    category: "Integrations",
    questions: [
      {
        id: 13,
        alt: "Organization Icon",
        Icon: Organization,
        question: "Does Dress360 integrate with my calendar?",
        answer:
          "With calendar integration, Dress360 can help plan your outfits for upcoming events or trips automatically!",
      },
      {
        id: 14,
        alt: "Integrate Icon",
        Icon: Integrate,
        question: "Can I sync my wardrobe?",
        answer:
          "Yes! Upload or link your wardrobe images, and our AI will suggest new combinations and tell you what to buy next to enhance your look.",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: Import,
        question:
          "Can I import past orders from other platforms?",
        answer:
          "Currently, we support importing data from Myntra and Amazon. Just link your accounts and view suggestions based on your purchase history.",
      },
      {
        id: 16,
        alt: "Slack Icon",
        Icon: Slack,
        question:
          "Can I share looks with friends or on social apps?",
        answer:
          "Of course! Share outfits and wishlist items directly to WhatsApp, Instagram, and more, right from the product page.",
      },
    ],
  },
];


const testimonials = [
  {
    id: 1,
    rating: 5,
    description:
      "I used Dress360 to style my look for my cousin's wedding, and everyone asked where I shopped from. The AI stylist is amazing!",
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    name: "Aishwarya Sharma",
    title: "Fashion Blogger",
  },
  {
    id: 2,
    rating: 5,
    description:
      "I never thought I'd enjoy shopping this much. Just a few clicks and I had a complete outfit for my college fest. Loved it!",
    src: new URL("../assets/headshots/img-3.webp", import.meta.url),
    name: "Ritik Joshi",
    title: "Student, DU",
  },
  {
    id: 3,
    rating: 4,
    description:
      "The chatbot understood exactly what I needed for my Goa trip. Light, trendy, and affordable picks!",
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    name: "Neha Mehta",
    title: "Travel Influencer",
  },
  {
    id: 4,
    rating: 5,
    description:
      "Dress360 is like having a personal stylist in your pocket. I love how it suggests clothes based on my mood!",
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    name: "Kunal Verma",
    title: "Software Developer",
  },
  {
    id: 5,
    rating: 4,
    description:
      "Shopping for my mom was so easy. The AI even suggested matching bangles with the saree. Impressive tech!",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    name: "Isha Reddy",
    title: "Startup Founder",
  },
  {
    id: 6,
    rating: 5,
    description:
      "I asked for a ‘power look’ for my office meeting and ended up looking like a boss! Dress360 gets it right every time.",
    src: new URL("../assets/headshots/img-1.webp", import.meta.url),
    name: "Aniket Deshmukh",
    title: "Marketing Manager",
  },
  {
    id: 7,
    rating: 5,
    description:
      "The interface is smooth, and I love the way it tailors styles for every body type. Best fashion site in India!",
    src: new URL("../assets/headshots/img-6.webp", import.meta.url),
    name: "Sneha Kapoor",
    title: "Fitness Coach",
  },
];

const footerCols = [
  {
    id: 1,
    category: "Home",
    links: ["FAQ", "Features", "Companies", "Testimonials"],
  },
  {
    id: 2,
    category: "Pricing",
    links: ["Plans", "Billing", "Free Trial", "Refunds"],
  },
  {
    id: 3,
    category: "About",
    links: ["Careers", "Our Story", "Contact", "Policy"],
  },
  {
    id: 4,
    category: "Community",
    links: ["Forum", "Stories", "Blog", "Support"],
  },
];

const features = {
  SmartOrganization: {
    alt: "Smart Organization graphic",
    heading: "Smart Organization",
    description:
      "Automatically categorize and tag your notes using AI-driven analysis. \
      NoteFlow intelligently identifies key topics and organizes your content, \
      making it easy to find and retrieve your notes when you need them most.",
  },
  ContextualReminders: {
    alt: "Contextual Reminders graphic",
    heading: "Contextual Reminders",
    description:
      "Stay on top of important tasks with AI-powered reminders that adapt to the \
      context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions \
      from your notes and sends timely alerts to ensure nothing slips through the cracks.",
  },
};

export {
  navigationLinks,
  reviews,
  logos,
  frequentlyAskedQuestions,
  testimonials,
  footerCols,
  features,
};
