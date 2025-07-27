export function Email() {
  return (
    <div className="flex flex-col w-[255] h-[92] gap-[24px] content-between">
      <h4 className="w-[160] h-[28] font-inter font-semibold text-[20px] leading-[28px] tracking-normal text-[#FFFFFF]">
        Stay up to date
      </h4>
      <input
        type="email"
        placeholder="Your email address"
        className="w-[255] h-[40] top-[52px] rounded-lg opacity-20 bg-[#FFFFFF] placeholder-[#D9DBE1]"
      />
    </div>
  );
}
