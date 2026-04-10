import Link from "next/link";
import { BlogPost } from "@/data/blogPosts";

type BlogListSectionProps = {
  posts: BlogPost[];
};

export default function BlogListSection({ posts }: BlogListSectionProps) {
  return (
    <div className="blog1-section-area sp2">
      <div className="container">
        <div className="row">
          {posts.map((post) => (
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
  );
}
