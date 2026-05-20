import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogListSection from "@/components/blog/BlogListSection";
import { blogPosts } from "@/data/blogPosts";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Balosh news, updates, and field stories across access control and security deployments.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Balosh Blog",
    description: "Read Balosh news, updates, and field stories across access control and security deployments.",
    url: "/blog",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Balosh Blog",
    description: "Read Balosh news, updates, and field stories across access control and security deployments.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogPage() {
  return (
    <>
      <InternalHeader />
      <main className="inner-page-flow blog-page-flow">
        <BlogHeroSection title="Our Blog" breadcrumbLabel="Our Blog" />
        <BlogListSection posts={blogPosts} />
      </main>
      <Footer />
    </>
  );
}
