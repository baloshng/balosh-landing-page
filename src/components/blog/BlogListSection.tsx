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
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="blog-author-boxraea">
                <div className="othera-content">
                  <div className="img1">
                    <Image src={post.authorImage} alt={post.author} width={80} height={80} className="rounded-full object-cover" unoptimized />
                  </div>
                  <div className="text">
                    <Link href={`/blog/${post.slug}`}>{post.author}</Link>
                  </div>
                </div>
                <div className="space20" />
                <div className="blog-img">
                  <Image src={post.image} alt={post.title} width={800} height={500} className="h-auto w-full object-cover" unoptimized />
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
