import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import InternalHeader from "@/components/InternalHeader";
import BlogHeroSection from "@/components/blog/BlogHeroSection";

const CAREER_PARAGRAPHS = [
  "kindly fill and submit the form below.",
  "N.B: Only forms with accrate and clear information would be reviewed.",
  "Balosh is the No. 1 access control company, operating successfully since 2005. We pride ourselves as one of the most innovative teams in the industry, and our growth has come from understanding each client's specific requirements while maintaining strong service delivery.",
];

const ROLE_OPTIONS = [
  "Account officer/analyst",
  "Admin/storekeeper",
  "Operations officer",
  "Parking attendant",
  "Supervisor",
  "Ticket attendant",
  "Others",
];

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
                <h3>Role Applying For</h3>
                <div className="space16" />
                <ul>
                  {ROLE_OPTIONS.map((role) => (
                    <li key={role}>
                      <p>{role}</p>
                    </li>
                  ))}
                </ul>
                <div className="space32" />
                <Link href="https://balosh.com/career/" target="_blank" rel="noreferrer" className="header-btn4">
                  Apply on Balosh Careers <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
