export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  day: string;
  month: string;
  excerpt: string;
  image: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 2894,
    slug: "balosh-in-asaba",
    title: "Balosh In Asaba",
    author: "balosh_admin",
    authorImage: "/assets/img/all-images/blog-img4.png",
    date: "22 July 2021",
    day: "22",
    month: "Jul",
    excerpt:
      "Balosh Integrated Services announced the award for administration and management of Asaba Airport car park and toll services.",
    image: "/assets/img/all-images/balosh-blog/asaba_n.png",
    category: "Balosh News",
    content: [
      "Balosh Integrated Services is delighted to announce that we have been awarded the contract for the administration and management of the car park and toll services of the Asaba Airport. The project was scheduled to commence in August 2021.",
      "Balosh will handle installation and management of the car park access control equipment and toll operations, ensuring vehicles entering designated tolled areas are charged according to applicable rates.",
      "The installed parking system monitors inward and outward traffic for seamless entry and exit. Trained attendants are positioned at strategic locations to patrol and coordinate vehicular movement, and to respond to emergencies.",
      "Balosh noted this project strengthens its access control footprint in Nigeria and supports job creation while improving the operational order of the toll and parking environment.",
    ],
  },
  {
    id: 4634,
    slug: "balosh-brings-sanity-to-lasuth-car-park",
    title: "Balosh brings sanity to LASUTH Car Park.",
    author: "balosh_admin",
    authorImage: "/assets/img/all-images/blog-img5.png",
    date: "01 May 2021",
    day: "01",
    month: "May",
    excerpt:
      "Balosh Integrated Services was appointed to improve LASUTH car park operations through automated access control and paid parking.",
    image: "/assets/img/all-images/balosh-blog/LASUTH.png",
    category: "Balosh News",
    content: [
      "Balosh Integrated Services was appointed to bring order to the LASUTH car park. The project focuses on improving use of the parking facility and increasing value for the hospital environment.",
      "Installation and programming of access control equipment started on 1 May 2021, automating entrances and exits while introducing a paid parking system.",
      "Entry and exit terminals across all three gates support daily ticketing and access card processing for staff, students, buses, and ambulances.",
      "The cashier terminal automates fee calculation based on parking duration, while structured operations and trained personnel have improved emergency movement and day-to-day traffic flow.",
    ],
  },
  {
    id: 2896,
    slug: "balosh-at-ttp-lagos",
    title: "Balosh At TTP Lagos",
    author: "balosh_admin",
    authorImage: "/assets/img/all-images/blog-img6.png",
    date: "04 February 2021",
    day: "04",
    month: "Feb",
    excerpt:
      "Balosh supported Eto rollout activities to reduce truck congestion around Apapa and improve controlled access to Lagos ports.",
    image: "/assets/img/all-images/balosh-blog/ttp.png",
    category: "Balosh News",
    content: [
      "To address truck congestion around Apapa and surrounding areas, port access operations moved to Eto, an electronic truck call-up system managing movement into Lagos Ports Complex and Tin Can Island Ports.",
      "Under this model, trucks are expected to wait at approved parks until called up through the Eto application.",
      "The application handles scheduling plus entry and exit control for trucks accessing port facilities.",
      "Balosh Integrated Services was contracted to install and maintain traffic barriers at multiple port sites to reduce gridlock on access roads and improve cargo movement efficiency.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
