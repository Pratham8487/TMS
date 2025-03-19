import DynamicList from "../Components/dynamic/DynamicList";
import mentors from "../data/MentorsData.json";
import { MentorCard } from "../Components/dynamic/DynamicCard";
export default function Mentors() {
  return (
    <div>
      <DynamicList
        title="Recent Mentors"
        data={mentors}
        CardComponent={MentorCard}
      />
    </div>
  );
}
