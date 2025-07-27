import { MobileLogin } from "./unlock/mobileLogin";
import { Details } from "./unlock/details";

export function Calendar() {
  return (
    <div className="flex inline-flex justify-between items-center  w-[1440] h-[433.3990173339844] pr-[144px] pl-[144px]">
      <MobileLogin />
      <Details />
    </div>
  );
}
