'use client';

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const sections = ["home", "about", "services", "projects", "contact"];

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white shadow-md p-4 flex justify-center space-x-6">
        {sections.map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </ScrollLink>
        ))}
      </nav>
      
      <div className="pt-16">
        <Section id="home">Home Section</Section>
        <Section id="about">About Us</Section>
        <Section id="services">Services</Section>
        <ProjectsSection id="projects" />
        <Section id="contact">Contact Us</Section>
      </div>
    </div>
  );
}

// Reusable Section Component
function Section({ id, children }) {
  return (
    <div id={id} className="h-screen flex items-center justify-center border-b">
      <h1 className="text-3xl">{children}</h1>
    </div>
  );
}

// Projects Section
function ProjectsSection({ id }) {
  const projects = [
    { id: 1, title: "Project One" },
    { id: 2, title: "Project Two" },
    { id: 3, title: "Project Three" },
  ];

  return (
    <Section id={id}>
      <h2 className="text-3xl mb-4">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline">
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
