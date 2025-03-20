// import DynamicList from "../Components/dynamic/DynamicList";
// import mentors from "../data/MentorsData.json";
// import { MentorCard } from "../Components/dynamic/DynamicCard";
// export default function Mentors() {
//   return (
//     <div>
//       <div className="p-[2rem] gap-[1.125rem]">
//         <DynamicList
//           title="Recent Mentors"
//           data={mentors}
//           CardComponent={MentorCard}
//           gridCols="lg:grid-cols-4 sm:grid-cols-2 "
//         />
//       </div>
//       <div className="p-[2rem] gap-[1.125rem]">
//         <DynamicList
//           title=" Mentors"
//           data={mentors}
//           CardComponent={MentorCard}
//           gridCols="lg:grid-cols-4 sm:grid-cols-2 "
//         />
//       </div>
//     </div>
//   );
// }

import DynamicList from "../Components/dynamic/DynamicList";
import mentors from "../data/MentorsData.json";
import { MentorCard } from "../Components/dynamic/DynamicCard";

export default function Mentors() {
  return (
    <div>
      <div className="p-[2rem] gap-[1.125rem]">
        <DynamicList
          title="Recent Mentors"
          data={mentors}
          CardComponent={MentorCard}
          gridCols="lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"
        />
      </div>
      <div className="p-[2rem] gap-[1.125rem]">
        <DynamicList
          title="Mentors"
          data={mentors}
          CardComponent={MentorCard}
          gridCols="lg:grid-cols-4 sm:grid-cols-2 grid-cols-1"
        />
      </div>
    </div>
  );
}
