import { Arrows } from "./arrows";
import { Meet } from "./meet";

export function Frame13() {
  return (
    <div className="w-fill h-[44] p-[8px] gap-[8px] inline-flex justify-between content-center">
      <Meet />
      <Arrows />
    </div>
  );
}
