import { Company } from "./company";
import { Support } from "./support";
import { Copyright } from "./copyright";
import { Icons } from "./icons";
import { Email } from "./email";
import { LogoWhite } from "./logo_white";

export function FooterBig() {
  return (
    <div className="flex inline-flex justify-between bg-[#263238] w-[1440] h-[328] pt-[64px] pr-[165px] pb-[64px] pl-[165px] gap-[125px] ">
      <div className="flex flex-col  justify-between  content-between w-[350] h-[189.67173767089844] gap-[40px]">
        <LogoWhite />
        <Copyright />
        <Icons />
      </div>
      <div className="flex inline-flex justify-between w-[635] h-[200] gap-[30px] ">
        <Company />
        <Support />
        <Email />
      </div>
    </div>
  );
}
