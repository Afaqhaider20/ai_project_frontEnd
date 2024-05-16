"use client";
import React from "react";

const page = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Log the form data as JSON
    console.log(JSON.stringify(data));
  };
  return (
    <div className="bg-rose-pine-moon min-h-screen flex flex-col items-center justify-center pb-8">
      <div
        id="header"
        className="relative bg-pink-500 py-5 text-center w-full rounded-t-lg overflow-hidden"
      >
        <h1 className="text-3xl">Bank Churn Prediction</h1>
      </div>

      <div
        id="container"
        className="bg-indigo-900 py-8 px-5 rounded-lg shadow-lg max-w-md mt-8"
      >
        <h3 className="text-xl mb-4 text-white">Input Data</h3>
        <form onSubmit={handleSubmit} action="charts.html" method="GET">
          <label htmlFor="estimatedSalary" className="block mb-2 text-gray-200">
            Estimated Salary:
            <input
              type="text"
              id="estimatedSalary"
              name="estimatedSalary"
              required
              className="w-full py-2 px-3 mb-2 bg-blue-500 rounded text-white"
            />
          </label>
          <label htmlFor="balance" className="block mb-2 text-gray-200">
            Balance:
            <input
              type="text"
              id="balance"
              name="balance"
              required
              className="w-full py-2 px-3 mb-2 bg-blue-500 rounded text-white"
            />
          </label>
          <label htmlFor="country" className="block mb-2 text-gray-200">
            Country:
            <input
              type="text"
              id="country"
              name="country"
              required
              className="w-full py-2 px-3 mb-2 bg-blue-500 rounded text-white"
            />
          </label>
          <label htmlFor="tenure" className="block mb-2 text-gray-200">
            Tenure:
            <input
              type="text"
              id="tenure"
              name="tenure"
              required
              className="w-full py-2 px-3 mb-2 bg-blue-500 rounded text-white"
            />
          </label>
          <label htmlFor="numOfProducts" className="block mb-2 text-gray-200">
            Num of Products:
            <input
              type="text"
              id="numOfProducts"
              name="numOfProducts"
              required
              className="w-full py-2 px-3 mb-2 bg-blue-500 rounded text-white"
            />
          </label>
          <label htmlFor="isActiveMember" className="block mb-2 text-gray-200">
            IsActiveMember:
            <input
              type="text"
              id="isActiveMember"
              name="isActiveMember"
              required
              className="w-full py-2 px-3 mb-2 bg-blue-500 rounded text-white"
            />
          </label>
          <label htmlFor="gender" className="block mb-4 text-gray-200">
            Gender:
            <input
              type="text"
              id="gender"
              name="gender"
              required
              className="w-full py-2 px-3 mb-2 bg-blue-500 rounded text-white"
            />
          </label>
          <input
            type="submit"
            value="Enter"
            className="w-full py-2 px-4 bg-pink-500 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-purple-500 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
