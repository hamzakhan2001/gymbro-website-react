import React from "react";
import { Star } from "lucide-react";


const testimonials = [
  {
    name: "Ali Raza",
    role: "Gym Member",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "GymBro completely changed my lifestyle. The trainers are professional and the environment is super motivating."
  },
  {
    name: "Sarah Khan",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Best gym experience ever! Modern equipment, clean space, and very supportive coaches."
  },
  {
    name: "Ahmed Malik",
    role: "Weight Loss Client",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "I lost 12kg in 4 months. GymBro helped me stay consistent and confident. Highly recommended!"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            What Our <span className="text-accent">Members Say</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Real stories from people who transformed their lives with GymBro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Review */}
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                “{item.review}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-white/60 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
