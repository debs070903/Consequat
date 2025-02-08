import React from "react";

export const TeamCard = ({ name, role, img }) => (
  <div className="bg-teal-100 dark:bg-gray-800 shadow-md rounded-xl p-4 text-center transition-transform transform hover:scale-105">
    <img
      src={img}
      alt={name}
      className="w-24 h-24 mx-auto rounded-full object-cover"
    />
    <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-gray-100">
      {name}
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
  </div>
);
