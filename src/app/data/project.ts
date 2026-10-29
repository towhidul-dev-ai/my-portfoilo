
export type Project = {
  slug: string;
  name: string;
  category: string;
  number: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "bangla-news",
    name: "Bangla News 24",
    category: "News Platform",
    number: "01",
    description:
      "A Bengali news platform designed to present news content through a clean, responsive interface.",
    longDescription:
      "This project focuses on building a modern news experience with Next.js, TypeScript, responsive styling, and authentication features.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MONGODB",
    ],
    image: "/images/bangla-news.png",
    liveUrl: "https://bangla-news-project.vercel.app/",
    githubUrl: "https://github.com/towhidul-dev-ai/bangla-news-project",
    challenges: [
      "Organizing pages and reusable components with the App Router.",
      "Integrating authentication into the application.",
      "Maintaining a responsive layout across screen sizes.",
    ],
    improvements: [
      "Improve news discovery and filtering.",
      "Add more robust loading and error states.",
      "Improve accessibility and performance.",
    ],
  },
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    category: "Price Tracking",
    number: "02",
    description:
      "A Bangladeshi essential-goods price tracking application that displays product prices and price changes.",
    longDescription:
      "Bazar Dor uses API data to display daily prices of essential products, organize products by category, and help users understand price movements.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "REST API",
      "MONGODB"
    ],
    image: "/images/bazar-dor.png",
    liveUrl: "https://bajar-dor-project-nc2c.vercel.app/",
    githubUrl: "https://github.com/towhidul-dev-ai/bajar-dor-project",
    challenges: [
      "Fetching and displaying product data from an API.",
      "Filtering products by category.",
      "Presenting price changes clearly in the interface.",
    ],
    improvements: [
      "Add price history charts.",
      "Add product search and sorting options.",
      "Improve API error handling and loading states.",
    ],
  },
  {
    slug: "fitlog",
    name: "FitLog",
    category: "Fitness Application",
    number: "03",
    description:
      "A fitness application concept focused on organizing fitness-related information in a user-friendly interface.",
    longDescription:
      "FitLog is one of my web development projects. This page provides an overview of the project; update its details to match the features in your actual implementation.",
    technologies: ["Next.js", "React", "TypeScript", "REST API", "Tailwind CSS"],
    image: "/images/fitlog.png",
    liveUrl: "https://workout-nextjs-project.vercel.app/",
    githubUrl: "https://github.com/towhidul-dev-ai/workout-nextjs-project",
    challenges: [
      "Building reusable interface components.",
      "Organizing application data and page layouts.",
      "Creating a responsive experience.",
    ],
    improvements: [
      "Add features based on the project's actual scope.",
      "Improve data visualization where appropriate.",
      "Add further testing and accessibility improvements.",
    ],
  },
];
