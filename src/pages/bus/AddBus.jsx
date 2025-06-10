import React, { useState } from "react";
import { toast } from "react-toastify";

const AddBus = () => {
  const [bus, setBus] = useState({
    busName: "",
    from: "",
    to: "",
    departureTime: "",
    arrivalTime: "",
    seatCapacity: "",
    busType: "",
  });

  const handleChange = (e) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: validation
    if (
      !bus.busName ||
      !bus.from ||
      !bus.to ||
      !bus.departureTime ||
      !bus.arrivalTime ||
      !bus.seatCapacity ||
      !bus.busType
    ) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Simulate saving data
 
    toast.success("Bus added successfully!");

    // Reset form
    setBus({
      busName: "",
      from: "",
      to: "",
      departureTime: "",
      arrivalTime: "",
      seatCapacity: "",
      busType: "",
    });
  };

  return (
    <div className="w-full min-h-screen p-6 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-white">
      <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mt-10 mb-6 text-center text-violet-700">
          Add New Bus
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">Bus Name</label>
            <input
              type="text"
              name="busName"
              value={bus.busName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-700"
              placeholder="Eg: Express 101"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">From</label>
              <input
                type="text"
                name="from"
                value={bus.from}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-700"
                placeholder="Starting location"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">To</label>
              <input
                type="text"
                name="to"
                value={bus.to}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-700"
                placeholder="Destination"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Departure Time</label>
              <input
                type="time"
                name="departureTime"
                value={bus.departureTime}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-700"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Arrival Time</label>
              <input
                type="time"
                name="arrivalTime"
                value={bus.arrivalTime}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-700"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Seat Capacity</label>
            <input
              type="number"
              name="seatCapacity"
              value={bus.seatCapacity}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-700"
              placeholder="Total seats"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Bus Type</label>
            <select
              name="busType"
              value={bus.busType}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md bg-neutral-100 dark:bg-neutral-700"
            >
              <option value="">Select Type</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
              <option value="Sleeper">Sleeper</option>
              <option value="Seater">Seater</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-700 hover:bg-violet-800 text-white py-3 rounded-md font-semibold transition-all"
          >
            Add Bus
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBus;
