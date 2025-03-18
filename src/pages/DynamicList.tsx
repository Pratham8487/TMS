import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

interface DynamicListProps {
  title: string;
  data: any[]; // Accepts any array of data
  CardComponent: React.FC<any>; // Accepts any React functional component
}

const DynamicList: React.FC<DynamicListProps> = ({
  title,
  data,
  CardComponent,
}) => {
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth < 640;
  const mentorsPerPage = isMobile ? 1 : 2;

  const nextMentor = () => {
    if (index + mentorsPerPage < data.length) {
      setIndex(index + mentorsPerPage);
    }
  };

  const prevMentor = () => {
    if (index > 0) {
      setIndex(index - mentorsPerPage);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mt-4">
        {/* Left Side: Title */}
        <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
        {/* Right Side: Icons */}
        <div className="flex items-center gap-3">
          <span
            onClick={index > 0 ? prevMentor : undefined}
            className={`${index <= 0 ? "opacity-50" : "hover:cursor-pointer"}`}
          >
            <FaChevronLeft />
          </span>
          <span
            onClick={
              index + mentorsPerPage < data.length ? nextMentor : undefined
            }
            className={`${
              index + mentorsPerPage >= data.length
                ? "opacity-50"
                : "hover:cursor-pointer"
            }`}
          >
            <FaChevronRight />
          </span>
        </div>
      </div>

      {/* Dynamic Card Component */}
      <div className="flex flex-wrap gap-10 justify-start lg:justify-start pt-6 w-full">
        {data.slice(index, index + mentorsPerPage).map((item, idx) => (
          <CardComponent key={idx} {...item} />
        ))}
      </div>
    </>
  );
};

export default DynamicList;
