import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogListSection from "@/components/blog/BlogListSection";
import { blogPosts } from "@/data/blogPosts";

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
