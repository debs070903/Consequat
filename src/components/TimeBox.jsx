import React from "react";

export const TimeBox = ({ label, value }) => {
  const formatValue = (val) => String(val).padStart(2, "0");
  
  return (
    <div className="dark:bg-gray-200 bg-teal-600 rounded-xl md:w-24 md:h-24 w-14 h-14 flex flex-col items-center justify-center">
      <p className="md:text-2xl font-semibold">{formatValue(value ?? "00")}</p>
      <p className="text-[10px] md:text-[20px]">{label}</p>
    </div>
  );
};
