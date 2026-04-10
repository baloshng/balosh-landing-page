import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogListSection from "@/components/blog/BlogListSection";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogHeroSection title="Our Blog" breadcrumbLabel="Our Blog" />
      <BlogListSection posts={blogPosts} />
      <Footer />
    </>
  );
}
