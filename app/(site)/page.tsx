import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  metadataBase: new URL("https://bandnine.org"),
  keywords: [
    "IELTS practice tests",
    "Free IELTS practice tests",
    "IELTS mock tests",
    "Free IELTS mock tests",
    "IELTS preparation",
    "IELTS online tests",
    "IELTS exam",
    "IELTS practice exams",
    "Free IELTS practice exams",
    "IELTS online practice",
    "IELTS online tests",
    "English language practice",
    "Free English language practice",
    "How to practice IELTS tests",
    "How to practice IELTS tests for free",
    "How to get higher band in IELTS",
    "How to get high score in IELTS",
    "Best IELTS practice tests similar to real exam",
    "Best IELTS mock tests similar to real exam",
    "Best place to practice IELTS test",
    "Best tool to practice IELTS test",
    "Best software to practice IELTS test",
    "IELTS listening practice",
    "IELTS reading practice",
    "IELTS writing practice",
    "IELTS speaking practice",
    "IELTS listening test online",
    "IELTS reading test online",
    "IELTS writing test online",
    "IELTS speaking test online",
    "Free IELTS test resources",
    "Free IELTS sample tests",
    "Free IELTS practice questions",
    "How to score band 8 in IELTS",
    "How to score band 9 in IELTS",
    "Tips for high IELTS score",
    "Strategies for high IELTS band",
    "Best IELTS practice tests for 2024",
    "How to improve IELTS score quickly",
    "Practice IELTS tests with AI",
    "Practice IELTS tests with Artificial Inteligence",
    "AI-powered IELTS practice tests",
    "AI-driven IELTS test preparation",
    "AI-enhanced IELTS listening test",
    "AI-enhanced IELTS reading test",
    "AI-enhanced IELTS writing test",
    "AI-enhanced IELTS speaking test",
    "Personalized IELTS practice with AI",
    "Boost IELTS scores with AI",
    "Free AI IELTS practice tests",
    "Premium AI IELTS test preparation",
    "Real-time feedback on IELTS practice with AI",
    "Detailed IELTS feedback with AI",
    "AI-powered IELTS study assistant",
    "AI-driven IELTS learning support",
    "How AI is transforming IELTS preparation",
    "AI technology for IELTS exam success",
    "Innovative AI tools for IELTS study",
    "AI-powered tools for IELTS practice tests",
    "Artificial intelligence in IELTS exam preparation",
    "Improve IELTS scores with AI technology",
    "2024 AI IELTS preparation tools",
  ],
  title: "Personalized IELTS Practice with AI",
  openGraph: {
    description:
      "Boost your IELTS band score with personalized practice exams and real-time feedback powered by cutting-edge Artificial Intelligence. Experience tailored preparation designed to meet your unique needs and achieve your highest potential.",
    images: ["/public/images/logo/social-media-sharable-image.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <About />
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <CTA />
      <FAQ />
      {/* <Testimonial /> */}
      <Pricing />
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
