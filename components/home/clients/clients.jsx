import { ClientsText } from "./clientsText";
import { Icons } from "./icons";

export function Clients() {
  return (
    <div className="bg-[#FFF] pr-[144px] pl-[144px] gap-[16px] w-[1440] h-[190] text-center">
      <ClientsText />
      <Icons />
    </div>
  );
}
