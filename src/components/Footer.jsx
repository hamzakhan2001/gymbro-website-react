import React from "react";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-heading font-bold">
              <span className="text-white">Gym</span>
              <span className="text-accent">Bro</span>
            </h2>
            <p className="text-white/70 mt-4 text-sm leading-relaxed">
              GymBro is dedicated to transforming lives through fitness, strength,
              and discipline. Train smarter. Live stronger.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white/70">
              <li><NavLink to="/" className="hover:text-accent">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-accent">About</NavLink></li>
              <li><NavLink to="/pricing" className="hover:text-accent">Pricing</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-accent">Contact</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-white/70">
              <li>Personal Training</li>
              <li>Strength Training</li>
              <li>CrossFit Programs</li>
              <li>Nutrition Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Karachi, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +92 300 1234567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@gymbro.com
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <Instagram className="hover:text-accent cursor-pointer" />
              <Facebook className="hover:text-accent cursor-pointer" />
              <Twitter className="hover:text-accent cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-white/50 text-sm py-6">
          © {new Date().getFullYear()} GymBro. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
