const Pagination = ({ isFirstPage, isLastPage, handlePrev, handleNext, isDisabledPrev, isDisabledNext }) => {
  return (
    <div className="flex justify-between items-center">
      <button
        className={`bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          isFirstPage ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrev}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <button
        className={`bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          isLastPage ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNext}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
