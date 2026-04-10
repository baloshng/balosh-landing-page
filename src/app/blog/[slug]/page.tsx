import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      <Header />

      <div className="hero-inner-section-area">
        <img src="/assets/img/elements/elements1.png" alt="" className="elements1 aniamtion-key-5" />
        <img src="/assets/img/elements/elements2.png" alt="" className="elements2 aniamtion-key-1" />
        <img src="/assets/img/elements/elements3.png" alt="" className="elements3 aniamtion-key-5" />
        <img src="/assets/img/elements/elements4.png" alt="" className="elements4 aniamtion-key-1" />
        <img src="/assets/img/elements/elements5.png" alt="" className="elements5 keyframe5" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 m-auto">
              <div className="hero-main-area heading1 text-center">
                <h1 className="text-anime-style-3">{post.title}</h1>
                <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Blog Details</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-single-inner-area sp8">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="blog-right-single-area">
                <div className="img1">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="space32" />
                <div className="blog-auhtor-area">
                  <ul>
                    <li><a href="#"><img src={post.authorImage} alt={post.author} />{post.author}</a></li>
                    <li><a href="#"><i className="fa-regular fa-calendar" /> {post.date}</a></li>
                    <li><a href="#"><img src="/assets/img/icons/comments1.svg" alt="" />{post.category}</a></li>
                  </ul>
                </div>
                <div className="space24" />
                <h1>{post.title}</h1>
                <div className="space16" />
                {post.content.map((paragraph, index) => (
                  <div key={`${post.slug}-p-${index}`}>
                    <p>{paragraph}</p>
                    <div className="space16" />
                  </div>
                ))}

                <div className="space32" />
                <div className="post-share-area">
                  <div className="posts">
                    <ul>
                      <li>Post Tags:</li>
                      <li><a href="#">{post.category}</a></li>
                    </ul>
                  </div>
                  <div className="share">
                    <ul>
                      <li>Social Share:</li>
                      <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog1-section-area sp2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="blog-header heading2 text-center">
                <h2>View More Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {relatedPosts.map((item) => (
              <div className="col-lg-6 col-md-6" key={item.id}>
                <div className="blog-author-boxraea">
                  <div className="othera-content">
                    <div className="img1">
                      <img src={item.authorImage} alt={item.author} />
                    </div>
                    <div className="text">
                      <a href="#">{item.author}</a>
                    </div>
                  </div>
                  <div className="space20" />
                  <div className="blog-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="blog-content">
                    <a href="#" className="tags"><i className="fa-regular fa-calendar-days" /> {item.date}</a>
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    <p>{item.excerpt}</p>
                    <div className="space12" />
                    <Link href={`/blog/${item.slug}`} className="readmore">Learn More <i className="fa-solid fa-arrow-right" /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
