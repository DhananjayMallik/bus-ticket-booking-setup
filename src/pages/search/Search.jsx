import React, { useState } from "react";

const Search = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seat: ""
  });

  const [showResult, setShowResult] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckAvailability = () => {
    if (formData.from && formData.to && formData.date && formData.time && formData.seat) {
      setShowResult(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="w-full h-auto lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/40 dark:to-neutral-800/70 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 text-center">
          Find Your Perfect Ride
        </h2>

        {/* Mobile trigger button - only shows on small screens */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full h-12 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-violet-700 hover:to-indigo-700 transition-all flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {showForm ? 'Hide Search' : 'Tap to Search'}
          </button>
        </div>

        {/* Form container - hidden on mobile unless showForm is true */}
        <div className={`${showForm ? 'block' : 'hidden'} md:block`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 items-end">
            {/* From */}
            <div className="relative">
              <label htmlFor="from" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                From
              </label>
              <div className="relative">
                <select
                  name="from"
                  id="from"
                  value={formData.from}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select Location</option>
                  <option value="Location 1">Location 1</option>
                  <option value="Location 2">Location 2</option>
                  <option value="Location 3">Location 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* To */}
            <div className="relative">
              <label htmlFor="to" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                To
              </label>
              <div className="relative">
                <select
                  name="to"
                  id="to"
                  value={formData.to}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select Location</option>
                  <option value="Location 4">Location 4</option>
                  <option value="Location 5">Location 5</option>
                  <option value="Location 6">Location 6</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                Choose Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                Choose Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Seat */}
            <div className="">
              <label htmlFor="seat" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                Total Seat
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="seat"
                  name="seat"
                  placeholder="Number of seats"
                  value={formData.seat}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <button
                type="button"
                onClick={handleCheckAvailability}
                className="w-full h-12 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-violet-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Check Availability
              </button>
            </div>
          </div>
        </div>

        {showResult && (
          <div className="mt-10 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-700 animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 text-violet-600 dark:text-violet-400 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Availability Summary
            </h3>
            <ul className="text-neutral-700 dark:text-neutral-200 space-y-3">
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-violet-500 rounded-full mr-2"></span>
                <strong className="w-24 text-neutral-600 dark:text-neutral-400">From:</strong> 
                <span className="font-medium">{formData.from}</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-violet-500 rounded-full mr-2"></span>
                <strong className="w-24 text-neutral-600 dark:text-neutral-400">To:</strong> 
                <span className="font-medium">{formData.to}</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-violet-500 rounded-full mr-2"></span>
                <strong className="w-24 text-neutral-600 dark:text-neutral-400">Date:</strong> 
                <span className="font-medium">{formData.date}</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-violet-500 rounded-full mr-2"></span>
                <strong className="w-24 text-neutral-600 dark:text-neutral-400">Time:</strong> 
                <span className="font-medium">{formData.time}</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 bg-violet-500 rounded-full mr-2"></span>
                <strong className="w-24 text-neutral-600 dark:text-neutral-400">Seats:</strong> 
                <span className="font-medium">{formData.seat}</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <button className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;