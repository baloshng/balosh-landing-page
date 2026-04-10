import { BlogPost } from "@/data/blogPosts";

type HomeBlogSectionProps = {
  posts: BlogPost[];
};

export default function HomeBlogSection({ posts }: HomeBlogSectionProps) {
  const homeBlogSlides = [...posts, ...posts, ...posts].map((post, index) => (
    <div className="blog-boxarea" key={`${post.slug}-${index}`}>
      <div className="img1">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="content-area">
        <div
          className="date"
          style={{
            backgroundImage: "url(/assets/img/bg/blog-date.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <a href={`/blog/${post.slug}`}>{post.day} <br /> {post.month}</a>
        </div>
        <a href={`/blog/${post.slug}`}>{post.title}</a>
        <p>{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} className="readmore">Learn More <i className="fa-solid fa-arrow-right" /></a>
      </div>
    </div>
  ));

  return (
    <div className="blog3-section-area sp1" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-header-area heading6">
              <h5 data-aos="fade-up" data-aos-duration={800}><img src="/assets/img/icons/finger2.svg" alt="" />Our Blogs</h5>
              <h2 className="text-anime-style-3">Surveillance Stories Exploring Security Solutions</h2>
              <p data-aos="fade-up" data-aos-duration={1000}>Welcome to our Security and CCTV Blog, your go-to resource for staying updated on the latest trends, tips, and insights in the world of security.</p>
              <div className="btn-area" data-aos="fade-up" data-aos-duration={1100}>
                <a href="/blog" className="header-btn4">View All <i className="fa-solid fa-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-duration={1200}>
            <div className="blog-slider-area owl-carousel">
              {homeBlogSlides}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
