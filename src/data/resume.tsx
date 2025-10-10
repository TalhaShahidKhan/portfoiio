import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "MD Talha Shahid Khan",
  initials: "DV",
  url: "https://dillion.io",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Result Driven Full Stack Developer | API Specialist with Django and Django Rest Framework |React, NextJS | Seeking opportunity for business and tech entrepreneurship",
  summary:
    "At the end of 2021, I decided to go all-in on my vision of building tech products that matter. As a self-taught full stack developer with 3+ years of experience, I’ve specialized in backend development using Python, Django, and DRF, while building clean frontends with React, Next.js, and Tailwind CSS. What started as curiosity turned into a drive to build SaaS products and automation tools that empower creators and businesses. I’m now focused on turning that passion into scalable one-person startups — combining my technical expertise with entrepreneurial thinking to build the future of web technology.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Python",
    "Django",
    "Django Rest Framework",
    "TailwindCSS",
    "Reflex PY",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "talhashahidkhan49@gmail.com",
    tel: "+8801717051054",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TalhaShahidKhan",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/talha-shahid-khan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/TSKhan_5429",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Coding-Arena",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Information and Technology Club of Rouf College (ITCRC)",
      href: "https://itcrc.org",
      badges: [],
      location: "Remote",
      title: "Executive",
      logoUrl: "/itcrc.png",
      start: "Aug 2024",
      end: "Now",
      description:
        "I am an Executive at the IT club of my college. It has helped me develop my social and IT skills very much.",
    },
  ],
  education: [
    {
      school: "Saturia Govt Model Pilot High School",
      href: "https://www.saturiagovmphschool.edu.bd/",
      degree: "SSC",
      logoUrl: "/scllogo.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "BIRSHRESHTHA MUNSHI ABDUR ROUF PUBLIC COLLEGE",
      href: "https://www.abdurroufcollege.ac.bd/",
      degree: "HSC",
      logoUrl: "/clglogo.png",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Friends Blog",
      href: "https://talhakhan54.pythonanywhere.com/",
      dates: "Jan 2025",
      active: true,
      description:
        "It is a fully functional Blog application built with django. It has proper authentication and permission management.",
      technologies: ["Python", "Django", "PostgreSQL", "HTMX", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://talhakhan54.pythonanywhere.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blog.png",
      video: "",
    },
    {
      title: "ISP management System",
      href: "https://github.com/TalhaShahidKhan/project_isp",
      dates: "Aug 2024",
      active: true,
      description:
        "It is an ISP management system with fully integrated payment system. It has mikrotik access to controll internet users",
      technologies: [
        "Python",
        "Django",
        "HTMX",
        "TailwindCSS",
        "Vanilla JavaScript",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/TalhaShahidKhan/project_isp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/isp.png",
      video: "",
    },
    {
      title: "Eventry",
      href: "https://eventry-zeta.vercel.app",
      dates: "Aug 2025",
      active: true,
      description:
        "It is an event listing app where you can see events listed. You can show interest to join an event and you also can mark an event as going with a demo checkout",
      technologies: ["Next.js", "Typescript", "MongoDB", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://eventry-zeta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eventry.png",
      video: "",
    },
    {
      title: "EcoVista",
      href: "https://ecovista-jet.vercel.app/",
      dates: "Aug 2025",
      active: true,
      description:
        "It is a weather dashboad which shows both wheather and air quality in a perticular location. It is built using openweather api",
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "OpenWeather API"],
      links: [
        {
          type: "Website",
          href: "https://ecovista-jet.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eco.png",
      video: "",
    },
    {
      title: "Henna Bloom",
      href: "https://hennabloom.vercel.app/",
      dates: "Aug 2025",
      active: true,
      description:
        "A collaboration with a Henna designing page and here is the website they are satisfied with",
      technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://hennabloom.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/henna.png",
      video: "",
    },
    {
      title: "Tasker",
      href: "https://tasktasker.vercel.app/",
      dates: "Aug 2025",
      active: true,
      description:
        "A demo task Listing app with react js. It helps me to understand react state management properly",
      technologies: ["React.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://tasktasker.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/task.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
