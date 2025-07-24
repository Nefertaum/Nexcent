import Image from "next/image";

export function Button() {
  return (
    <div className="mx-auto inline-flex justify-between tracking-normal bg-[#4CAF4F] w-[178] h-[52] rounded-sm pt-[14px] pr-[32px] pb-[14px] pl-[32px] font-medium text-[#FFFFFF] font-inter text-[16px] leading-[24px] gap-[8px]">
      <button type="button">Get a Demo</button>
      <Image
        src="/images/Right2white.svg"
        width={16}
        height={16}
        alt="Get a Demo arrow"
      />
    </div>
  );
}
