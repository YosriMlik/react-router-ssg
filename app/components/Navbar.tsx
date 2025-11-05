import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold hover:text-gray-300">
            My Site
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link to="/services" className="hover:text-gray-300 transition">
              Services
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
