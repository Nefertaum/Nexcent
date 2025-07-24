import { Button } from "./button";
import { Content } from "./content";

export function Frame16() {
  return (
    <div className="text-center w-[1440] h-[300] pt-[32px] pb-[32px] gap-[32px] bg-[#F5F7FA]">
      <Content />
      <Button />
    </div>
  );
}
