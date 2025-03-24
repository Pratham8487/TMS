// import DynamicList from "../Components/dynamic/DynamicList";
// import TaskData from "../data/TaskData.json";
// import { UpcomingTaskCard } from "../Components/dynamic/DynamicCard";

// export default function Task() {
//   return (
//     <div>
//       <div className="p-[2rem] gap-[1.125rem]">
//         <DynamicList
//           title="Time Limit"
//           data={TaskData}
//           CardComponent={UpcomingTaskCard}
//           gridCols="lg:grid-cols-4 sm:grid-cols-2 "
//         />
//       </div>
//       <div className="p-[2rem] gap-[1.125rem]">
//         <DynamicList
//           title="New Task"
//           data={TaskData}
//           CardComponent={UpcomingTaskCard}
//           gridCols="lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 "
//         />
//       </div>
//     </div>
//   );
// }




import { useNavigate } from "react-router-dom";
import DynamicList from "../Components/dynamic/DynamicList";
import TaskData from "../data/TaskData.json";
import { UpcomingTaskCard } from "../Components/dynamic/DynamicCard";

export default function Task() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-[2rem] gap-[1.125rem]">
        <DynamicList
          title="Time Limit"
          data={TaskData}
          CardComponent={({ id, ...props }) => (
            <div onClick={() => navigate(`/tasks/${id}`)} className="cursor-pointer">
              <UpcomingTaskCard id={id} {...props} />
            </div>
          )}
          gridCols="lg:grid-cols-4 sm:grid-cols-2"
        />
      </div>
      <div className="p-[2rem] gap-[1.125rem]">
        <DynamicList
          title="New Task"
          data={TaskData}
          CardComponent={({ id, ...props }) => (
            <div onClick={() => navigate(`/tasks/${id}`)} className="cursor-pointer">
              <UpcomingTaskCard id={id} {...props} />
            </div>
          )}
          gridCols="lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2"
        />
      </div>
    </div>
  );
}
