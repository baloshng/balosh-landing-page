import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import CareersApplicationForm from "@/components/careers/CareersApplicationForm";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

const CAREER_PARAGRAPHS = [
  "Kindly fill and submit the form below.",
  "Balosh is the No. 1 access control company, operating successfully since 2005. We pride ourselves as one of the most innovative teams in the industry, and our growth has come from understanding each client's specific requirements while maintaining strong service delivery.",
];

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Balosh workforce and explore career opportunities in access control and security operations.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Balosh Careers",
    description: "Join the Balosh workforce and explore career opportunities in access control and security operations.",
    url: "/careers",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Balosh Careers",
    description: "Join the Balosh workforce and explore career opportunities in access control and security operations.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function CareersPage() {
  return (
    <>
      <InternalHeader />
      <BlogHeroSection title="Careers" breadcrumbLabel="Careers" titleColumnClassName="col-lg-6" />
      <div className="blog-single-inner-area sp8">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="blog-right-single-area">
                <div className="img1">
                  <Image
                    src="/assets/img/all-images/balosh-career/career-logo.png"
                    alt="Balosh Careers"
                    width={512}
                    height={193}
                    className="h-auto w-full object-contain"
                    style={{ maxHeight: "220px", objectPosition: "left" }}
                    unoptimized
                  />
                </div>
                <div className="space32" />
                <h1>Join the Balosh Workforce</h1>
                <div className="space16" />
                {CAREER_PARAGRAPHS.map((paragraph, index) => (
                  <div key={`career-p-${index}`}>
                    <p>{paragraph}</p>
                    <div className="space16" />
                  </div>
                ))}
                <CareersApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
