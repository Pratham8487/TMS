import DynamicList from "../Components/dynamic/DynamicList";
import mentorsData from "../data/MentorsData.json";
import mentors from "../data/Mentors.json";
import { MentorCard } from "../Components/dynamic/DynamicCard";

export default function Mentors() {
  return (
    <div>
      <div className="px-[2rem] py-[0.5rem] gap-[1.125rem]">
        <DynamicList
          title="Recent Mentors"
          data={mentorsData}
          CardComponent={MentorCard}
          gridCols="lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2 grid-cols-1"
        />
      </div>
      <div className="px-[2rem] py-[0.5rem] gap-[1.125rem]">
        <DynamicList
          title="Mentors"
          data={mentors}
          CardComponent={MentorCard}
          gridCols="lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 grid-cols-1"
          showAllInMobile={true}
        />
      </div>
    </div>
  );
}
