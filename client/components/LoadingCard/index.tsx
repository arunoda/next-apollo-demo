const LoadingCard = () => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white animate-pulse"
      data-testid="loading-card"
    >
      <div className="px-6 py-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" data-testid="placeholder"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2" data-testid="placeholder"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2" data-testid="placeholder"></div>
        <div className="mt-4">
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2" data-testid="placeholder"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6" data-testid="placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
