// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Checkout = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 px-4 mt-[8ch] sm:mt-[13ch] mb-[4ch] sm:mb-[8ch] space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
        {/* Passenger Information - Full width on mobile, 3 cols on desktop */}
        <div className="lg:col-span-3 space-y-7 lg:pr-20">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            Passenger Information
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullname" className="block mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter Name"
                className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Youremail@.com"
                className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
              <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-400 font-normal">
                You will get your tickets via this email
              </small>
            </div>

            <div>
              <label htmlFor="phonenumber" className="block mb-2 font-semibold">
                Phone Number
              </label>
              <input
                type="number"  
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter mobile number"
                className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="passport" className="block mb-2 font-semibold">
                  Passport Number
                </label>
                <input
                  type="text"
                  id="passport"
                  name="passport"
                  placeholder="Enter passport number"
                  className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="nationality" className="block mb-2 font-semibold">
                  Nationality
                </label>
                <select
                  id="nationality"
                  name="nationality"
                  className="w-full h-12 px-4 bg-white/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="IN">India</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Booking Summary - Full width on mobile, 2 cols on desktop */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-5 sm:px-7">
            <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
              Your Booking Status
            </h2>
            <div className="space-y-6 pb-3">
              <div className="space-y-4">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                  Your Destination :
                </h6>
                <div className="w-full flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-full sm:w-fit text-base font-medium">
                    From: <span className="ml-1.5">Location 1</span>
                  </div>
                  <div className="hidden sm:block flex-1">
                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                  </div>
                  <div className="w-full sm:w-fit text-base font-medium">
                    To: <span className="ml-1.5">Location 4</span>
                  </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-full sm:w-fit text-base font-medium">
                    Arrive At: <span className="ml-1.5">4:00 P.M</span>
                  </div>
                  <div className="hidden sm:block flex-1">
                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                  </div>
                  <div className="w-full sm:w-fit text-base font-medium">
                    Departure At: <span className="ml-1.5">6:00 P.M</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-full flex items-center justify-between">
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      Total No. of Seats
                    </h6>  
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      10 <span className="text-xs">(Driver side)</span>
                    </h6>  
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-full flex items-center justify-between">
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      Total Amount
                    </h6>  
                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                      Rs. 5000
                    </h6>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full px-4 sm:px-8 h-12 bg-violet-600 hover:bg-violet-700 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2 transition-colors">
            Proceed to pay <FaArrowRightLong className="text-sm"/>     
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;