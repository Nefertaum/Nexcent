import { Logo } from "./logo";
import { Nav } from "./nav";
import { Userbuttons } from "./userbuttons";
export function Header() {
  return (
    <div className="w-[1440] h-[84] bg-[#F5F7FA]">
      <div className="absolute inset-y-[30px] inset-x-[105px] gap-[8px]">
        <Logo />
      </div>
      <div className="absolute inset-y-[30px] inset-x-[425.5px] gap-[50px]">
        <Nav />
      </div>
      <div className="absolute inset-y-[22px] inset-x-[1138px] gap-[14px]">
        <Userbuttons />
      </div>
    </div>
  );
}
