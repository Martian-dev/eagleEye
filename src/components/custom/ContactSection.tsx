import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Have questions or want to work with us? We would love to hear from you. Fill out the form and we will get back to
            you soon.
          </p>

          <ul className="space-y-4 text-gray-400 font-medium">
            <li><i className="fas fa-envelope text-white mr-2"></i> the_eagle_eye@gmail.com</li>
            <li><i className="fas fa-phone text-white mr-2"></i> +91555555555</li>
            <li><i className="fas fa-map-marker-alt text-white mr-2"></i> Chennai</li>
          </ul>

          <br />
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="text-white hover:text-blue-400 transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-red-500 transition">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white hover:text-sky-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right: Form Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#ddd]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
