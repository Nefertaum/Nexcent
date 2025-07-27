import Image from "next/image";

export function Frame4() {
  return (
    <div className="flex inline-flex justify-between content-between items-center w-[1440] h-[280] pr-[144px] pl-[144px] ">
      <div className="flex flex-col justify-between items-center content-between w-[299] h-[260] rounded-lg pt-[24px] pr-[32px] pb-[24px] pl-[32px] gap-[8px] shadow-[0_2px_4px_#ABBED133]">
        <div className="flex flex-col justify-between items-center w-[267] h-[144] gap-[16px] ">
          <Image
            src="images/Membership.svg"
            width={65}
            height={56}
            alt="membership"
            className="mx-auto"
          />
          <h3 className="w-[267] h-[72] font-inter font-bold text-[28px] leading-[36px] text-[#4D4D4D] ">
            Membership Organisations
          </h3>
        </div>
        <div className="w-[251] h-[60] gap-[8px]">
          <p className="w-[251] h-[60] font-inter font-regular text-[14px] leading-[20px] tracking-normal text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center content-between w-[299] h-[280] rounded-lg pt-[24px] pr-[32px] pb-[24px] pl-[32px] gap-[8px] shadow-[0_2px_4px_#ABBED133]">
        <div className="flex flex-col justify-between w-[267] h-[144] gap-[16px] ">
          <Image
            src="/images/National.svg"
            width={65}
            height={56}
            alt="national"
            className="mx-auto"
          />
          <h3 className="w-[267] h-[72] font-inter font-bold text-[28px] leading-[36px] text-[#4D4D4D] ">
            National Associations
          </h3>
        </div>
        <div className="w-[240] h-[80] gap-[8px]">
          <p className="w-[240] h-[80] font-inter font-regular text-[14px] leading-[20px] tracking-normal text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and <br></br> payments
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center content-between w-[299] h-[260] rounded-lg pt-[24px] pr-[32px] pb-[24px] pl-[32px] gap-[8px] shadow-[0_2px_4px_#ABBED133]">
        <div className="flex flex-col justify-between items-center w-[267] h-[144] gap-[16px] ">
          <Image
            src="/images/Clubs.svg"
            width={65}
            height={56}
            alt="clubs"
            className="mx-auto"
          />
          <h3 className="w-[231] h-[72] font-inter font-bold text-[28px] leading-[36px] text-[#4D4D4D] ">
            Clubs And Groups
          </h3>
        </div>
        <div className="w-[251] h-[60] gap-[8px]">
          <p className="w-[251] h-[60] font-inter font-regular text-[14px] leading-[20px] tracking-normal text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
