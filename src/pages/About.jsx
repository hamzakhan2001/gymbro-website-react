import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-primary text-white pt-34">

      {/* Page Header */}
      <div className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold">
            About <span className="text-accent">GymBro</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            We help people build strength, confidence, and a healthier lifestyle.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h2 className="text-3xl font-heading font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            GymBro is more than just a gym — it's a community focused on helping
            individuals reach their full potential. Whether you're a beginner
            or a professional athlete, we provide the guidance and environment
            you need to succeed.
          </p>
          <p className="text-white/70 leading-relaxed">
            With modern equipment, certified trainers, and personalized fitness
            programs, GymBro ensures that every member trains smarter and safer.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Gym Training"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Our Mission
            </h3>
            <p className="text-white/70 leading-relaxed">
              To empower people through fitness by providing expert coaching,
              modern facilities, and a motivating environment.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Our Vision
            </h3>
            <p className="text-white/70 leading-relaxed">
              To become a leading fitness brand that inspires healthy living and
              positive change worldwide.
            </p>
          </div>

        </div>
      </div>

      {/* Stats */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold text-accent">10+</h4>
            <p className="text-white/70">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-accent">50+</h4>
            <p className="text-white/70">Expert Trainers</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-accent">1000+</h4>
            <p className="text-white/70">Happy Members</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-accent">100%</h4>
            <p className="text-white/70">Satisfaction</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-secondary py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-white/70 mb-8">
          Join GymBro today and transform your life.
        </p>
        <NavLink to="/contact" className="cursor-pointer bg-accent px-8 py-4 rounded-lg font-medium hover:opacity-90 transition">
          Get Free Consultation
        </NavLink>
      </div>

    </section>
  );
};

export default About;
