import React from "react";
import { Check } from "lucide-react";
import { NavLink } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic",
    price: "$29/mo",
    features: [
      "Access to gym equipment",
      "1 personal training session",
      "Group classes",
    ],
  },
  {
    name: "Standard",
    price: "$49/mo",
    features: [
      "Access to gym equipment",
      "3 personal training sessions",
      "Group classes",
      "Nutrition plan",
    ],
  },
  {
    name: "Premium",
    price: "$79/mo",
    features: [
      "Unlimited gym access",
      "7 personal training sessions",
      "Group classes",
      "Nutrition plan",
      "1-on-1 coaching",
    ],
  },
];

const Pricing = () => {
  return (
    <main className="bg-primary text-white pt-36 lg:pt-40">

      {/* ================= Page Hero ================= */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold">
            Gym <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Choose a plan that fits your fitness goals and start your journey today!
          </p>
        </div>
      </section>

      {/* ================= Pricing Plans ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-secondary/30 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition"
          >
            {/* Plan Name */}
            <h3 className="text-2xl font-heading font-bold text-accent mb-4">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-4xl font-bold mb-6">{plan.price}</p>

            {/* Features */}
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-accent w-5 h-5" />
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <NavLink
              to="/contact"
              className="bg-accent px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Join Now
            </NavLink>
          </div>
        ))}
      </section>

      {/* ================= CTA Section ================= */}
      <section className="bg-secondary py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Ready to Transform Your Life?
        </h2>
        <p className="text-white/70 mb-8">
          Pick a plan and start your fitness journey with GymBro today!
        </p>
        <NavLink
          to="/contact"
          className="bg-accent px-8 py-4 rounded-lg font-medium hover:opacity-90 transition"
        >
          Get Free Consultation
        </NavLink>
      </section>
    </main>
  );
};

export default Pricing;
