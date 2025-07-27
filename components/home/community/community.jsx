import { CommunityText } from "./communityText";
import { Frame4 } from "./frame4";

export function Community() {
  return (
    <div className="flex flex-col justify-between bg-[#FFF] w-[1440] h-[416] gap-[16px] text-center">
      <CommunityText />
      <Frame4 />
    </div>
  );
}
