import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import image1 from '../assets/trainer1.jpg'
import image2 from '../assets/trainer2.jpg'
import image3 from '../assets/trainer3.jpg'
import image4 from '../assets/trainer4.jpg'

const trainers = [
  {
    name: "Alex Johnson",
    role: "Strength Coach",
    image: image1
},
  {
    name: "George Smith",
    role: "Fitness Trainer",
    image: image2
  },
  {
    name: "Emily Stone",
    role: "CrossFit Expert",
    image: image3
  },
  {
    name: "David Wilson",
    role: "Yoga Instructor",
    image: image4
  }
];

const Trainers = () => {
  return (
    <section className="bg-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Meet Our <span className="text-accent">Trainers</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Certified professionals dedicated to helping you achieve your fitness goals.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl overflow-hidden group hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-90 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <Instagram className="text-white hover:text-accent cursor-pointer" />
                  <Facebook className="text-white hover:text-accent cursor-pointer" />
                  <Linkedin className="text-white hover:text-accent cursor-pointer" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-accent font-medium text-md mt-1">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
