import React from "react";
import heroImage from "../assets/hero-image.jpg"; // replace with your image path
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
   
   <section className="bg-primary text-white min-h-screen flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-12 py-12">
   
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-heading font-bold">
          Transform <span className="text-accent">Your Body</span>, Transform Your Life
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/70 max-w-lg">
          Personal Training, Group Classes, and Nutrition Plans Tailored for You
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <NavLink to='/contact' className="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer">
            Get Free Consultation
          </NavLink>
          <NavLink to="/pricing" className="border border-white px-6 py-3 rounded-lg hover:bg-accent hover:border-accent transition cursor-pointer">
            Explore Pricing
          </NavLink>
        </div>

        {/* Optional Stats */}
        <div className="hidden sm:flex gap-8 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">30+</span>
            <span className="text-accent">Trainers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">1000+</span>
            <span className="text-accent">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">200+</span>
            <span className="text-accent">Classes</span>
          </div>
        </div>
      </div>

      {/* Right Column - Hero Image */}
      <div className="flex-1 flex justify-center items-center mb-8 sm:mb-0">
        <img
          src={heroImage}
          alt="Gym Training"
          className="w-full max-w-xl rounded-xl shadow-xl"
        />
      </div>

    </section>
  );
};

export default Hero;
