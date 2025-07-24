import { Description } from "./sectionHeading/description";
import { SectionHeading } from "./sectionHeading/sectionHeading";
import { One } from "./counts/row1/1/1";
import { Two } from "./counts/row1/2/2";
import { Three } from "./counts/row2/3/3";
import { Four } from "./counts/row2/4/4";

export function Achievemennts() {
  return (
    <div className="inline-flex justify-between w-[1440] h-[288] pt-[64px] pr-[144px] pb-[64px] pl-[144px] bg-[#F5F7FA] ">
      <div className="flex-col w-[540] h-[120] gap-[8px] ">
        <SectionHeading />
        <Description />
      </div>
      <div className="flex-col justify-between  w-[540] h-[160] gap-[40px] ">
        <div className="inline-flex justify-between w-[540] h-[60] gap-[30px] ">
          <One />
          <Three />
        </div>
        <div className="inline-flex justify-between w-[540] h-[60] gap-[30px]">
          <Two />
          <Four />
        </div>
      </div>
    </div>
  );
}
