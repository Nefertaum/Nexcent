import { Frame1 } from "./frame1/frame1";
import { Illustration } from "./Illustration";
import { Dot } from "./dot";

export function Hero() {
  return (
    <div className="bg-[#F5F7FA]  gap-[104px] w-[1440] h-[599] pt-[96px] pr-[144px] pb-[96px] pl-[144px]">
      <div className="flex inline-flex justify-between content-center items-center w-[1140]">
        <Frame1 />
        <Illustration />
      </div>
      <div className="absolute w-[46] h-[10] inset-y-[573px] inset-x-[697px] gap-[8px]">
        <Dot />
      </div>
    </div>
  );
}
