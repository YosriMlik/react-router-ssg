import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "description", content: "Get in touch with us" },
  ];
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-md">
        <p className="text-lg mb-6">
          Have questions? We'd love to hear from you.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">[email]</p>
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">[phone_number]</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">[address]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
