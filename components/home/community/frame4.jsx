import Image from "next/image";

export function Frame4() {
  return (
    <div className="inline-flex justify-between w-[1440] h-[280] pr-[144px] pl-[144px] ">
      <div className="text-center w-[299] h-[260] rounded-lg pt-[24px] pr-[32px] pb-[24px] pl-[32px] gap-[8px] shadow-[0_2px_4px_#ABBED133]">
        <Image
          src="images/Membership.svg"
          width={65}
          height={56}
          alt="membership"
          className="mx-auto"
        />
        <h3>Membership Organisations</h3>
        <p>
          Our membership management software provides full automation of
          membership renewals and payments
        </p>
      </div>
      <div className="text-center w-[299] h-[260] rounded-lg pt-[24px] pr-[32px] pb-[24px] pl-[32px] gap-[8px] shadow-[0_2px_4px_#ABBED133]">
        <Image
          src="/images/National.svg"
          width={65}
          height={56}
          alt="national"
          className="mx-auto"
        />
        <h3>National Associations</h3>
        <p>
          Our membership management software provides full automation of
          membership renewals and payments
        </p>
      </div>
      <div className="text-center w-[299] h-[260] rounded-lg pt-[24px] pr-[32px] pb-[24px] pl-[32px] gap-[8px] shadow-[0_2px_4px_#ABBED133]">
        <Image
          src="/images/Clubs.svg"
          width={65}
          height={56}
          alt="clubs"
          className="mx-auto"
        />
        <h3>Clubs And Groups</h3>
        <p>
          Our membership management software provides full automation of
          membership renewals and payments
        </p>
      </div>
    </div>
  );
}
