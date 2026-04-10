import { BlogPost } from "@/data/blogPosts";

type BlogDetailContentSectionProps = {
  post: BlogPost;
};

export default function BlogDetailContentSection({ post }: BlogDetailContentSectionProps) {
  return (
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
  );
}
