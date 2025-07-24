import { Logo } from "@/components/header/logo";
import { Company } from "./company";
import { Support } from "./support";
import { Copyright } from "./copyright";
import { Icons } from "./icons";
import { Email } from "./email";

export function FooterBig() {
  return (
    <div className="inline-flex justify-between bg-[#263238]">
      <Logo />
      <Copyright />
      <Company />
      <Support />
      <Icons />
      <Email />
    </div>
  );
}
