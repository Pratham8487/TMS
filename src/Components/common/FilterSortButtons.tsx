import { FaFilter, FaSortAmountDown } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const FilterSortButtons = () => {
  return (
    <>
      <div className="relative my-4">
        <input
          type="text"
          placeholder="Search Mentors"
          className="w-96 p-2 pl-6 pr-12 text-gray-700 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <AiOutlineSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-100">
          <FaFilter className="mr-2 text-purple-500" /> Category
        </button>
        <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-100">
          <FaSortAmountDown className="mr-2 text-purple-500" /> Sort By :
          Deadline
        </button>
      </div>
    </>
  );
};

export default FilterSortButtons;
