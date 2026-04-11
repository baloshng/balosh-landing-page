import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogListSection from "@/components/blog/BlogListSection";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <>
      <InternalHeader />
      <BlogHeroSection title="Our Blog" breadcrumbLabel="Our Blog" />
      <BlogListSection posts={blogPosts} />
      <Footer />
    </>
  );
}
