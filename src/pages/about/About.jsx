import React from 'react';
import { FaBus, FaShieldAlt, FaHeadset, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import { GiModernCity } from 'react-icons/gi';
import { MdPayment } from 'react-icons/md';


const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* <Header /> */}
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-violet-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Bus Booking Platform</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner for comfortable, affordable, and reliable bus travel across the country.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Story</h2>
            <div className="text-gray-600 dark:text-gray-300 space-y-4 text-lg">
              <p>
                Founded in 2015, we started with a simple mission: to make bus travel booking easier and more accessible for everyone. 
                What began as a small startup has now grown into one of the leading online bus ticket booking platforms in the country.
              </p>
              <p>
                We partner with over 50 bus operators to bring you the widest selection of routes, schedules, and price options. 
                Our platform serves more than 1 million customers annually, helping them travel safely and comfortably.
              </p>
              <p>
                Our team of travel experts and tech enthusiasts work tirelessly to improve your booking experience with innovative features 
                and exceptional customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Why Choose Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                  <FaBus />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Wide Network</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access to 10,000+ routes across the country with 50+ trusted bus operators.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Safe Travel</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Verified operators with safety-certified buses and trained drivers for your peace of mind.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                  <MdPayment />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Easy Payments</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Multiple payment options including cards, UPI, net banking, and wallet payments.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                  <FaHeadset />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our customer care team is available round the clock to assist you with any queries.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                  <GiModernCity />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">City Coverage</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connecting major cities and small towns with reliable intercity bus services.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">
                  <FaAward />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Award Winning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Recognized as the "Best Online Bus Booking Platform" for 3 consecutive years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-lg">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Bus Operators</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-lg">Routes</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Doe", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/1.jpg" },
              { name: "Jane Smith", role: "CTO", img: "https://randomuser.me/api/portraits/women/1.jpg" },
              { name: "Robert Johnson", role: "Head of Operations", img: "https://randomuser.me/api/portraits/men/2.jpg" },
              { name: "Emily Davis", role: "Customer Experience", img: "https://randomuser.me/api/portraits/women/2.jpg" },
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Our Coverage</h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                We currently serve routes across these major regions with plans to expand further.
              </p>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-center gap-4">
                  {['North', 'South', 'East', 'West', 'Central'].map((region) => (
                    <div key={region} className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-800 dark:text-white">{region} India</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <img 
                    src="https://mapsvg.com/static/maps/geo-calibrated/india.svg" 
                    alt="India map" 
                    className="w-full max-w-md mx-auto opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default About;