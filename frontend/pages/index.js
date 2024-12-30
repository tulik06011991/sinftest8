export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-opacity-10">
        <h1 className="text-2xl font-bold">My Brand</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-300">Our World</span>
        </h2>
        <p className="text-lg mb-8">
          Discover the best solutions for your business with us.
        </p>
        <a
          href="#get-started"
          className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-white text-gray-800 py-16 px-6 md:px-16 rounded-t-3xl"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">About Us</h3>
          <p className="text-lg">
            We are a team of experts dedicated to providing high-quality
            solutions for all your business needs. Join us in building a better
            future together.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 px-6 md:px-16 bg-gray-100 text-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-2">Service 1</h4>
              <p>High-quality and reliable solutions tailored to your needs.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-2">Service 2</h4>
              <p>Expert consulting for business growth and innovation.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-2">Service 3</h4>
              <p>Cutting-edge technology and seamless integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 md:px-16 bg-indigo-800 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p className="mb-8">Reach out to us for more information.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg text-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg text-gray-800"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg text-gray-800"
              rows="4"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} My Brand. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
