import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "State Management"],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Authentication (JWT, NextAuth)",
      ],
    },
    {
      category: "DevOps",
      technologies: ["Docker", "Kubernetes", "CI/CD", "AWS (EC2, S3, RDS)"],
    },
    {
      category: "Other Skills",
      technologies: [
        "System Design",
        "WebSockets (Real-time Communication)",
        "Caching (Redis, CDN)",
        "Testing (Unit & Integration)",
      ],
    },
  ];

  return (
    <section id="skills" className="p-6 md:p-12 bg-gray-900 text-gray-100">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-center text-green-700 sm:text-4xl">
        Core Tech Stack
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-800 p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Skill Category */}
            <h3 className="mb-4 text-xl font-bold text-green-500">
              {skill.category}
            </h3>
            {/* Technology List */}
            <ul className="space-y-2">
              {skill.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-all"
                >
                  • {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
