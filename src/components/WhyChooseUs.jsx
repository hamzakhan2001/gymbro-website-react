import React from "react";
import { Dumbbell, Users, HeartPulse, Clock } from "lucide-react";

const features = [
  {
    icon: <Dumbbell size={36} className="text-accent" />,
    title: "Modern Equipment",
    desc: "Train with the latest machines and free weights for all fitness levels."
  },
  {
    icon: <Users size={36} className="text-accent" />,
    title: "Expert Trainers",
    desc: "Certified professional coaches to guide and motivate you."
  },
  {
    icon: <HeartPulse size={36} className="text-accent" />,
    title: "Personalized Plans",
    desc: "Workout and diet plans tailored to your body and goals."
  },
  {
    icon: <Clock size={36} className="text-accent" />,
    title: "Flexible Timings",
    desc: "Morning to night access that fits your busy lifestyle."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Why Choose <span className="text-accent">GymBro</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            We don’t just train bodies — we build confidence, strength, and discipline.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
