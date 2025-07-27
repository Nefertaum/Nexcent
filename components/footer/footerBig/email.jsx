import { EmailIcon } from "./email_icon";

export function Email() {
  return (
    <div className="flex flex-col w-[255] h-[92] gap-[24px] content-between">
      <h4 className="w-[160] h-[28] font-inter font-semibold text-[20px] leading-[28px] tracking-normal text-[#FFFFFF]">
        Stay up to date
      </h4>
      <input
        type="email"
        placeholder="Your email address"
        className="w-[255] h-[40] top-[52px] rounded-lg opacity-20 bg-[#D9DBE1] text-white placeholder-white font-inter font-regular  "
      />
      {/* <div className="w-[18] h-[18] absolute mx-auto inset-x-[225px] inset-y-[63px] border-x border-y">
        <EmailIcon />
      </div> */}
    </div>
  );
}
