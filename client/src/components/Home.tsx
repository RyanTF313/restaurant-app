import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-linear-to-r from-blue-500 to-green-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome, Eat Up!
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Delicious meals delivered with a smile. Track your order in real
            time.
          </p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-black rounded-lg hover:bg-gray-900 transition"
            >
              Login
            </Link>
            <Link
              to="/menu"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Track Orders</h3>
            <p className="text-gray-600">
              Get real-time updates on your orders and delivery status.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Manage Menu</h3>
            <p className="text-gray-600">
              Easy menu management for owners, with images and pricing.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Employee Management</h3>
            <p className="text-gray-600">
              Add employees, assign roles, and keep track of their tasks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="mb-8 text-lg md:text-2xl">
          Sign in or start browsing the menu as a guest.
        </p>
        <Link
          to="/login"
          className="px-6 py-3 bg-black rounded-lg hover:bg-gray-900 transition mr-3 "
        >
          Login
        </Link>
        <Link
          to="/menu"
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition"
        >
          Browse Menu
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        &copy; {new Date().getFullYear()} Developed by Ryry.
      </footer>
    </div>
  );
}
