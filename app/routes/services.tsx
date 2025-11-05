import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Services" },
    { name: "description", content: "Explore our services" },
  ];
}

export default function Services() {
  const services = [
    { title: "Web Development", description: "Custom web applications built with modern technologies" },
    { title: "Design", description: "Beautiful and intuitive user interfaces" },
    { title: "Consulting", description: "Expert advice for your digital projects" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.title} className="border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
