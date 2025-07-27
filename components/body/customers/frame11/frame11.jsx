import { Frame14 } from "./frame14/frame14";
import { Content } from "./content/content";

export function Frame11() {
  return (
    <div className="flex flex-col justify-between items-center w-[748] h-[324] gap-[32px]">
      <Content />
      <Frame14 />
    </div>
  );
}
