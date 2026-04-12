import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogListSection from "@/components/blog/BlogListSection";
import { blogPosts } from "@/data/blogPosts";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "News",
  description: "Latest Balosh news on access control, parking systems, and security infrastructure projects.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Balosh News",
    description: "Latest Balosh news on access control, parking systems, and security infrastructure projects.",
    url: "/news",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Balosh News",
    description: "Latest Balosh news on access control, parking systems, and security infrastructure projects.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function NewsPage() {
  return (
    <>
      <InternalHeader />
      <BlogHeroSection title="News" breadcrumbLabel="News" />
      <BlogListSection posts={blogPosts} />
      <Footer />
    </>
  );
}
