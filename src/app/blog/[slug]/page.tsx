import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import BlogDetailContentSection from "@/components/blog/BlogDetailContentSection";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogRelatedSection from "@/components/blog/BlogRelatedSection";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <InternalHeader />
      <BlogHeroSection title={post.title} breadcrumbLabel="Blog Details" titleColumnClassName="col-lg-9" />
      <BlogDetailContentSection post={post} />
      <BlogRelatedSection posts={relatedPosts} />
      <Footer />
    </>
  );
}
