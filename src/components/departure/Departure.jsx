import React, { useState } from "react";

const Departure = () => {
    const [departure, setDeparture] = useState("");
      
    
      const handleDepartureChange = (e) => {
        setDeparture(e.target.value);
      };
    
  return (
   <div className="w-full space-y-4">
      {!departure ? (
        <div className="w-full grid grid-cols-3 gap-10">
          <div className="">
        
            <label htmlFor="departure" className="block md-2 font-semibold">
                Departure Time
            </label>
            <select 
            name="departure"
            id="departure"
            value={departure} 
            onChange={handleDepartureChange}
             className=" w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:bg-neutral-100 dark:focus:bg-neutral-900">
            <option value="">Select a Time</option>
            <option value="4:00 AM">4:00 AM</option>
            <option value="4:00 AM">4:00 AM</option>
            <option value="4:00 AM">4:00 AM</option>
            
            </select>
          </div>
          </div>
      ) : (
        <div className="space-y-5">
           
            <div className="w-full flex items-center gap-x-3">
                    <div className="w-fit text-base font-semibold">
                    Bus Departure at: - <span className="ml-1.5 font-medium">{departure}</span>
                </div>
                </div>
            </div>
       
      )}
    </div>
  )
}

export default Departure
