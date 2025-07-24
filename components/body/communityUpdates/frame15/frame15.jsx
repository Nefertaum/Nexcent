import { One } from "./1/one";
import { Two } from "./2/two";
import { Three } from "./3/three";

export function Frame15() {
  return (
    <div className="inline-flex justify-between w-[1440] h-[366] pr-[144px] pl-[144px]">
      <One />
      <Two />
      <Three />
    </div>
  );
}
