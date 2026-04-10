import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
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
            <div className="col-lg-3 m-auto">
              <div className="hero-main-area heading1 text-center">
                <h1 className="text-anime-style-3">Our Blog</h1>
                <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Our Blog</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog1-section-area sp2">
        <div className="container">
          <div className="row">
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="blog-author-boxraea">
                  <div className="othera-content">
                    <div className="img1">
                      <img src={post.authorImage} alt={post.author} />
                    </div>
                    <div className="text">
                      <a href="#">{post.author}</a>
                    </div>
                  </div>
                  <div className="space20" />
                  <div className="blog-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-content">
                    <a href="#" className="tags"><i className="fa-regular fa-calendar-days" /> {post.date}</a>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    <p>{post.excerpt}</p>
                    <div className="space12" />
                    <Link href={`/blog/${post.slug}`} className="readmore">Learn More <i className="fa-solid fa-arrow-right" /></Link>
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
