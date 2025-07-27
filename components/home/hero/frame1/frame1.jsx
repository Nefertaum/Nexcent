import { Text } from "./text";
import { Button } from "./button";

export function Frame1() {
  return (
    <div className="h-[276px] w-[657px] gap-[32px] flex flex-col justify-between content-between">
      <Text />
      <Button />
    </div>
  );
}
