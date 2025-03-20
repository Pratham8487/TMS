import DynamicList from "../Components/dynamic/DynamicList";
import UpcomingDetails from "../data/UpcomingTaskData.json";
import { UpcomingTaskCard } from "../Components/dynamic/DynamicCard";

export default function Task() {
  return (
    <div>
      <div className="p-[2rem] gap-[1.125rem]">
        <DynamicList
          title="Recent Mentors"
          data={UpcomingDetails}
          CardComponent={UpcomingTaskCard}
          gridCols="lg:grid-cols-4 sm:grid-cols-2 "
        />
      </div>
      <div className="p-[2rem] gap-[1.125rem]">
        <DynamicList
          title=" Mentors"
          data={UpcomingDetails}
          CardComponent={UpcomingTaskCard}
          gridCols="lg:grid-cols-4 sm:grid-cols-2 "
        />
      </div>
    </div>
  );
}
