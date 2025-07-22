import { Logo } from "./logo";
import { Nav } from "./nav";
import { Userbuttons } from "./userbuttons";
export function Header() {
  return (
    <div className="inline-flex w-[1,440] h-[84] bg-[#F5F7FA] container justify-around content-center ">
      <Logo />
      <Nav />
      <Userbuttons />
    </div>
  );
}
