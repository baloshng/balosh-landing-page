import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/data/blogPosts"

type BlogListSectionProps = {
  posts: BlogPost[]
}

export default function BlogListSection({ posts }: BlogListSectionProps) {
  return (
    <div className="blog1-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading6 text-center">
              <h5 data-aos="fade-up" data-aos-duration="800">
                <Image
                  src="/assets/img/icons/finger2.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="inline-block align-middle"
                />
                Our Blog
              </h5>
              <h2 data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
                News, Projects, and Field Updates
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="180">
                The latest from Balosh project updates, contract awards, and
                news from across our operations.
              </p>
            </div>
            <div className="space44 d-lg-block d-none" />
            <div className="space24 d-lg-none d-block" />
          </div>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="blog-author-boxraea">
                <div className="othera-content">
                  <div className="img1">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="text">
                    <Link href={`/blog/${post.slug}`}>{post.author}</Link>
                  </div>
                </div>
                <div className="space20" />
                <div className="blog-img">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={500}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="blog-content">
                  <Link href={`/blog/${post.slug}`} className="tags">
                    <i className="fa-regular fa-calendar-days" /> {post.date}
                  </Link>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  <p>{post.excerpt}</p>
                  <div className="space12" />
                  <Link href={`/blog/${post.slug}`} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
