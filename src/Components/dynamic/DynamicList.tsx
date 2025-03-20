import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface DynamicListProps {
  title: string;
  data: any[];
  CardComponent: React.FC<any>;
  gridCols?: string;
}

const DynamicList: React.FC<DynamicListProps> = ({
  title,
  data,
  CardComponent,
  gridCols,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth < 640;
  const mentorsPerPage = isHomePage ? (isMobile ? 1 : 2) : isMobile ? 1 : 4;

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
        <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>

        <div className="flex items-center gap-3">
          <span
            onClick={index > 0 ? prevMentor : undefined}
            className={`${
              index <= 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer"
            }`}
          >
            <FaChevronLeft />
          </span>
          <span
            onClick={
              index + mentorsPerPage < data.length ? nextMentor : undefined
            }
            className={`${
              index + mentorsPerPage >= data.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer"
            }`}
          >
            <FaChevronRight />
          </span>
        </div>
      </div>
      {/* Dynamic Card Component - Show Two Cards Per Row */}
      <div
        className={`grid md:grid-cols-2 gap-12 pt-6 w-full place-items-center ${gridCols}`}
      >
        {data.slice(index, index + mentorsPerPage).map((item, idx) => (
          <CardComponent key={idx} {...item} />
        ))}
      </div>
    </>
  );
};

export default DynamicList;
