import Link from "next/link";
import { BlogPost } from "@/data/blogPosts";

type BlogRelatedSectionProps = {
  posts: BlogPost[];
};

export default function BlogRelatedSection({ posts }: BlogRelatedSectionProps) {
  return (
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
          {posts.map((item) => (
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
  );
}
