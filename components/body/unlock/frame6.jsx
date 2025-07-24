import { LearnMoreButton } from "./learnMoreButton";

export function Frame6() {
  return (
    <div className="w-[661] h-[268] gap-[32px]">
      <div className="w-[601] h-[184] gap-[16px]">
        <h2 className="w-[601] h-[88] font-inter font-semibold text-[36px] leading-[44px] text-[#4D4D4D] ">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="w-[601] h-[80] font-inter font-regular text-[14px] leading-[20px] text-[#717171] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
      </div>
      <LearnMoreButton />
    </div>
  );
}
