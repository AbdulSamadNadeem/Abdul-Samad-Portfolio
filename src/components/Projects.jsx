import React from "react";

const projects = [
  {
    title: "Benificiary System",
    description:
      "A web-based system for managing beneficiaries and their records, built with React and Firebase. It supports secure data handling, role-based access, and real-time updates.",
    image: "/Screenshot (20).png",
    link: "https://github.com/AbdulSamadNadeem/Benificiary-System",
  },
  {
    title: "Chat Web-App",
    description:
      "A real-time chat application using React, Firebase Authentication, and Firestore. Features include user login, instant messaging, and responsive UI with Tailwind CSS.Vercel does not support Websockets thats why we can not see messages in realtime",
    image: "/Screenshot (21).png",
    link: "https://github.com/AbdulSamadNadeem/Chit-Shat",
  },
  {
  title: "SmartLead.ai",
  description:
    "A modern landing page built for SmartLead.ai — designed to showcase their AI-powered lead generation platform. Developed with React, featuring smooth animations, responsive design, and optimized performance for a clean, conversion-focused user experience.",
  image: "/Screenshot (22).png",
  link: "‎https://smart-lead-ai-third-version.vercel.app/",
},

  {
    title: "ChitShat",
    description:
      "In Progress.A mastterpiece of my skills include all type of realtime data transfers.All modern chat apps feature like stories statuses and many more",
    image: "In Progress",
  },
];

function Projects() {
  return (
    <div className="font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-6">
        Explore My Projects — Real-world Solutions, Clean Code
      </h1>

      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mb-12">
        Each project below represents hands-on experience with front-end and
        back-end development, using modern tools and technologies to solve real
        problems.
        <span className="text-blue-500">
          These are causing issues on Vercel becuase their backends are deployed
          on it.Working great on Localhost.
        </span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-md backdrop-blur-sm"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/6B7280/FFFFFF?text=Project";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  Github Repo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
