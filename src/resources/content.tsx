import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sara Amelia",
  lastName: "Bilic",
  name: `Sara Amelia Bilic`,
  role: "Cybersecurity FSO Consultant at EY | Graduating Student at HOWEST",
  avatar: "/images/avatar.jpeg",
  email: "sara_bilic@outlook.com",
  location: "Europe/Brussels", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Dutch", "Polish", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SaraameliaB/sarabilic",
    essential: false,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sara-amelia-bilic-586ba3353/?skipRedirect=true",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <></>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">EY FSO Belgium</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/digital-portfolio",
  },
  subline: (
    <>
    I'm Sara Amelia, a junior cybersecurity GRC Consultant at <Text as="span" size="xl" weight="strong">EY Belgium </Text>, where I translate technical security insights into clear proactive solutions and advice. <br /> After hours, I explore and maintain pentesting and build my technical cybersecurity skills!
</>
  ),
}
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sara Amelia is a Junior Cybersecurity GRC Consultant at EY Belgium with a background in Cybersecurity & Computer Science from HOWEST University of Applied Sciences. She combines a technical foundation with a GRC mindset, helping bridge the gap between cybersecurity expertise and strategic business decision-making.
         Outside of consulting, she explores pentesting and hands-on security projects to keep strengthening her technical perspective.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "EY Brussels",
        timeframe: "June 2026 - Present",
        role: "Junior Cybersecurity Consultant (GRC)",
        achievements: [
          <>
            Yet to start.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //{
          //  src: "/images/projects/project-01/cover-01.jpg",
          //  alt: "Once UI Project",
          //  width: 16,
          //  height: 9,
          //},
        ],
      },
      {
        company: "EY Brussels",
        timeframe: "February 2026 - May 2026",
        role: "Internship - GRC & AI",
        achievements: [
          <>
            Created (from scratch) an AI-Risk Register for financial services organizations to understand security risk stemming from AI-driven technical security landscape.
          </>,
          <>
            Participated in EY's Responsible AI workgroup.
          </>,
        ],
        images: [],
      },
      {
        company: "Prime Risk Solutions",
        timeframe: "August 2024 - June 2026",
        role: "Administrative Assistant (Student Job)",
        achievements: [
          <>
            Supported day-to-day operations of an independent insurance broker by organizing account records, managing and scheduling agendas, and handling client communication.
          </>,
          <>
            Responsible for creating accurate internal invoices, maintaining structured documentation within the organization, and ensuring smooth internal workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Code Fever",
        timeframe: "October 2021 - April 2026",
        role: "Teaching Aide",
        achievements: [
          <>
            Taught childeren Web Development basics, Python programming, and logical algorithms in a creative and easy-to-understand manner. E.g. the creation of fun and interactive exercises to make learning code enjoyable while maintaining educational value.
          </>,
          <>
            Provided guidance and support, fostering a positive and encouraging environment for students to explore coding.
          </>,
            <>
              Developed the ability to explain complex programming concepts in simple, engaging, and age-appropriate language.
            </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "HOWEST - University Of Applied Sciences (BE)",
        description: <>Obtained professional bachelor in computer science and cybersecurity.</>,
      },
      {
        name: "CEH Certification",
        description: <>Studied ethical hacking practices for web application and network pentesting.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cyber & IT Law Compliance",
        description: (
          <>Able to understand and apply European standards for cyber & IT compliance.</>
        ),
        tags: [
          {
            name: "Compliance",
          },
          {
            name: "GDPR",
          },
          {
            name: "DORA",
          },
          {
            name: "EU AI Act",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          //{
          //  src: "/images/projects/project-01/cover-02.jpg",
          //  alt: "Project image",
          //  width: 16,
          //  height: 9,
          //},
          //{
          //  src: "/images/projects/project-01/cover-03.jpg",
          //  alt: "Project image",
          //  width: 16,
          // height: 9,
          //},
        ],
      },
      {
        title: "Threat Modelling & Risk Management",
        description: (
          <>Able to identify, analyze, and mitigate potential security threats and vulnerabilities.</>
        ),
        tags: [
          {
            name: "Threat Modelling",
          },
          {
            name: "ISO/IEC 27001",
          },
          {
            name: "Vulnerability and Risk Assessment",
          },
        ],
        images: [
        ],
      },
      {
        title: "Network and Web Application Pentesting",
        description: (
            <>Able to penetrate and assess the security maturity of network and web application environments in an ethical way.</>
        ),
        tags: [
          {
            name: "Pentesting",
          },
          {
            name: "Security Assessment",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about network events and communities!",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Some recently involved projects and achievements of ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/ey-internship/cover.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/ey-internship/selfie.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/blog/aquatopia-hack-the-future/project-photo-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/blog/enisa-8th-edition/event-photo-01.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/blog/nato-t&m/event-photo-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/campus-stack/coverpage-05.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/blog/threats-to-tactics/event-photo-02.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
