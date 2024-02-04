import React from "react";

// LoadingCard component with loading placeholders
const LoadingCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white animate-pulse">
      <div className="px-6 py-4">
        {/* Placeholder for Name */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        {/* Placeholder for Email */}
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        {/* Placeholder for Phone Number */}
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        {/* Placeholder for Address */}
        <div className="mt-4">
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
