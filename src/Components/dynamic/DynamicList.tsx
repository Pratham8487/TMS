// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// interface DynamicListProps {
//   title: string;
//   data: any[];
//   CardComponent: React.FC<any>;
//   gridCols?: string;
// }

// const DynamicList: React.FC<DynamicListProps> = ({
//   title,
//   data,
//   CardComponent,
//   gridCols,
// }) => {
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   const [index, setIndex] = useState(0);
//   const isMobile = window.innerWidth < 640;
//   const mentorsPerPage = isHomePage ? (isMobile ? 1 : 2) : isMobile ? 1 : 4;

//   const nextMentor = () => {
//     if (index + mentorsPerPage < data.length) {
//       setIndex(index + mentorsPerPage);
//     }
//   };

//   const prevMentor = () => {
//     if (index > 0) {
//       setIndex(index - mentorsPerPage);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center mt-4">
//         <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>

//         <div className="flex items-center gap-3">
//           <span
//             onClick={index > 0 ? prevMentor : undefined}
//             className={`${
//               index <= 0
//                 ? "opacity-50 cursor-not-allowed"
//                 : "hover:cursor-pointer"
//             }`}
//           >
//             <FaChevronLeft />
//           </span>
//           <span
//             onClick={
//               index + mentorsPerPage < data.length ? nextMentor : undefined
//             }
//             className={`${
//               index + mentorsPerPage >= data.length
//                 ? "opacity-50 cursor-not-allowed"
//                 : "hover:cursor-pointer"
//             }`}
//           >
//             <FaChevronRight />
//           </span>
//         </div>
//       </div>
//       {/* Dynamic Card Component - Show Two Cards Per Row */}
//       <div
//         className={`grid md:grid-cols-2 gap-12 pt-6 w-full place-items-center ${gridCols}`}
//       >
//         {data.slice(index, index + mentorsPerPage).map((item, idx) => (
//           <CardComponent key={idx} {...item} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default DynamicList;

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface DynamicListProps {
  title: string;
  data: any[];
  CardComponent: React.FC<any>;
  gridCols?: string;
  showAllInMobile?: boolean;
}

const DynamicList: React.FC<DynamicListProps> = ({
  title,
  data,
  CardComponent,
  gridCols,
  showAllInMobile = false,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTwoRowLayout = gridCols?.includes("grid-rows-2");
  const basePerPage = isHomePage ? (isMobile ? 1 : 2) : isMobile ? 1 : 4;
  const mentorsPerPage = isTwoRowLayout ? basePerPage * 2 : basePerPage;
  const adjustedPerPage = showAllInMobile && isMobile ? data.length : mentorsPerPage;

  const nextMentor = () => {
    if (index + adjustedPerPage < data.length) {
      setIndex(index + adjustedPerPage);
    }
  };

  const prevMentor = () => {
    if (index > 0) {
      setIndex(index - adjustedPerPage);
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
              index <= 0 ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"
            }`}
          >
            <FaChevronLeft />
          </span>
          <span
            onClick={index + adjustedPerPage < data.length ? nextMentor : undefined}
            className={`${
              index + adjustedPerPage >= data.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer"
            }`}
          >
            <FaChevronRight />
          </span>
        </div>
      </div>
      {/* Dynamic Card Component - Adjusted for Mobile View if `showAllInMobile` is true */}
      <div
        className={`grid gap-12 pt-6 w-full place-items-center ${gridCols} ${showAllInMobile && isMobile ? "grid-cols-1 grid-rows-none" : ""}`}
      >
        {data.slice(index, index + adjustedPerPage).map((item, idx) => (
          <CardComponent key={idx} {...item} />
        ))}
      </div>
    </>
  );
};

export default DynamicList;
