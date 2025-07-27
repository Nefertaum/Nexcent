import { ReadMore } from "../readMore";

export function Content() {
  return (
    <div className="absolute bottom-0 left-6 w-[317] h-[176] rounded-lg p-[16px] gap-[16px] bg-[#F5F7FA] shadow-[0_8px_16px_#ABBED166] z-50">
      <h4 className="w-[285] h-[84] font-inter font-semibold text-[20px] leading-[28px] tracking-normal text-center text-[#717171]">
        What are your safeguarding responsibilities and how can you manage them?
      </h4>
      <ReadMore />
    </div>
  );
}
