import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/data/blogPosts"

type BlogRelatedSectionProps = {
  posts: BlogPost[]
}

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
                    <Image
                      src={item.authorImage}
                      alt={item.author}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="text">
                    <Link href={`/blog/${item.slug}`}>{item.author}</Link>
                  </div>
                </div>
                <div className="space20" />
                <div className="blog-img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={500}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="blog-content">
                  <Link href={`/blog/${item.slug}`} className="tags">
                    <i className="fa-regular fa-calendar-days" /> {item.date}
                  </Link>
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  <p>{item.excerpt}</p>
                  <div className="space12" />
                  <Link href={`/blog/${item.slug}`} className="readmore">
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
