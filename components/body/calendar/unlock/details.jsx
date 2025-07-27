import { LearnMoreButton } from "../../unlock/learnMoreButton";

export function Details() {
  return (
    <div className="flex flex-col justify-between w-[661] h-[308] gap-[32px]">
      <div className="flex flex-col justify-between w-[601] h-[224] gap-[16px] ">
        <h2 className="w-[601] h-[88] font-inter font-semibold text-[36px] leading-[44px] tracking-normal text-[#4D4D4D]">
          How to design your site footer like <br></br> we did
        </h2>
        <p className="w-[601] h-[120] font-inter font-regular text-[14px] laeding-[20px] text-[#717171] tracking-normal">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
      </div>
      <LearnMoreButton />
    </div>
  );
}
