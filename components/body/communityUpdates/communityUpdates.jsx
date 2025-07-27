import { Community } from "./community";
import { Frame15 } from "./frame15/frame15";

export function CommunityUpdates() {
  return (
    <div className="w-[1440] h-[506] gap-[16px] ">
      <Community />
      <Frame15 />
    </div>
  );
}
