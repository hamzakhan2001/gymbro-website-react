import React from "react";

const Contact = () => {
  return (
    <main className="bg-primary text-white pt-36 lg:pt-40">
      
      {/* ================= Page Hero ================= */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Have a question or want to start your fitness journey? Get in touch with us!
          </p>
        </div>
      </section>

      {/* ================= Contact Section ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-secondary/30 border border-white/10 p-8 rounded-xl backdrop-blur-sm shadow-md">
          <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition"
            ></textarea>
            <button
              type="submit"
              className="bg-accent px-6 py-3 rounded-lg font-medium hover:opacity-90 mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-heading font-bold mb-4">Contact Information</h2>
          <div className="flex items-center gap-3">
            <span className="text-accent text-lg">📍</span>
            <p>Karachi, Pakistan</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-accent text-lg">📞</span>
            <p>+92 300 1234567</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-accent text-lg">✉️</span>
            <p>info@gymbro.com</p>
          </div>

          {/* Optional Google Map Placeholder */}
          <div className="mt-6">
            <iframe
              title="GymBro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.123456789!2d67.123456!3d24.860734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f12345678%3A0x1234567890abcdef!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1612345678901!5m2!1sen!2s"
              className="w-full h-64 rounded-xl border border-white/10"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Contact;
