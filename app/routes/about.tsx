import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us" },
    { name: "description", content: "Learn more about us" },
  ];
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our about page. We're passionate about building great web experiences.
      </p>
      <p className="text-lg">
        Our team is dedicated to creating modern, fast, and accessible web applications.
      </p>
    </div>
  );
}
