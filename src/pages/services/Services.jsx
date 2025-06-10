import React from "react";
import { FaBusAlt, FaRegClock, FaTicketAlt, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaBusAlt className="text-4xl text-violet-600" />,
    title: "Multiple Routes",
    description: "Choose from hundreds of routes across cities and towns, all at your fingertips.",
  },
  {
    icon: <FaRegClock className="text-4xl text-violet-600" />,
    title: "Real-Time Schedule",
    description: "Get live bus schedules, arrival updates, and travel duration before booking.",
  },
  {
    icon: <FaTicketAlt className="text-4xl text-violet-600" />,
    title: "Easy Booking",
    description: "Book your bus tickets online easily with our intuitive platform.",
  },
  {
    icon: <FaHeadset className="text-4xl text-violet-600" />,
    title: "24/7 Customer Support",
    description: "Facing an issue? Our dedicated support team is here to help you anytime.",
  },
];

const Services = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 mt-10">Our Services</h2>
        <p className="text-lg text-gray-500 dark:text-gray-300">
          Everything you need to book your bus ticket with confidence and ease.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
