import { Frame1 } from "./frame1/frame1";
import { Illustration } from "./Illustration";
import { Dot } from "./dot";

export function Hero() {
  return (
    <div className="bg-[#F5F7FA] flex flex-col container pt-[96px] pr-[144px] pb-[96px] pl-[144px]">
      <div className="inline-flex container">
        <Frame1 />
        <Illustration />
      </div>
      <div className="w-[46] h-[10] inset-x-[657px]">
        <Dot />
      </div>
    </div>
  );
}
