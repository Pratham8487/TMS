import { useNavigate } from "react-router-dom";
import DynamicList from "../../Components/common/DynamicList";
import TaskData from "../../data/TaskData.json";
import { UpcomingTaskCard } from "../../Components/common/DynamicCard";

export default function Task() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="px-[2rem] py-[0.5rem] gap-[1.125rem]">
        <DynamicList
          title="Time Limit"
          data={TaskData}
          CardComponent={({ id, ...props }) => (
            <div
              onClick={() => navigate(`/tasks/${id}`)}
              className="cursor-pointer"
            >
              <UpcomingTaskCard id={id} {...props} />
            </div>
          )}
          gridCols="lg:grid-cols-4 sm:grid-cols-2"
        />
      </div>
      <div className="px-[2rem] py-[0.5rem] gap-[1.125rem]">
        <DynamicList
          title="New Task"
          data={TaskData}
          CardComponent={({ id, ...props }) => (
            <div
              onClick={() => navigate(`/tasks/${id}`)}
              className="cursor-pointer"
            >
              <UpcomingTaskCard id={id} {...props} />
            </div>
          )}
          gridCols="lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2"
        />
      </div>
    </div>
  );
}
