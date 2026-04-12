import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/data/blogPosts"

type BlogDetailContentSectionProps = {
  post: BlogPost
}

export default function BlogDetailContentSection({ post }: BlogDetailContentSectionProps) {
  return (
    <div className="blog-single-inner-area sp8">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="blog-right-single-area">
              <div className="img1">
                <Image src={post.image} alt={post.title} width={1200} height={675} className="h-auto w-full object-cover" unoptimized />
              </div>
              <div className="space32" />
              <div className="blog-auhtor-area">
                <ul>
                  <li>
                    <Link href={`/blog/${post.slug}`}>
                      <Image src={post.authorImage} alt={post.author} width={40} height={40} className="mr-2 inline-block rounded-full" unoptimized />
                      {post.author}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/blog/${post.slug}`}>
                      <i className="fa-regular fa-calendar" /> {post.date}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <Image src="/assets/img/icons/comments1.svg" alt="" width={16} height={16} className="mr-1 inline-block" unoptimized />
                      {post.category}
                    </Link>
                  </li>
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
                    <li>
                      <Link href="/blog">{post.category}</Link>
                    </li>
                  </ul>
                </div>
                <div className="share">
                  <ul>
                    <li>Social Share:</li>
                    <li>
                      <Link href="https://x.com/baloshng" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.facebook.com/balosh1/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/baloshng/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
