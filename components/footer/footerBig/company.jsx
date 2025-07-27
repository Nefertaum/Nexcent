export function Company() {
  return (
    <div className="flex flex-col justify-between content-between w-[160] h-[200] gap-[24px] text-[#F5F7FA]">
      <h4 className="w-[160] h-[28] font-inter font-semibold text-[20px] leading tracking-normal text-[#FFFFFF]">
        Company
      </h4>
      <ul className="flex flex-col justify-between content-between w-[160] h-[148] gap-[12]">
        <li className="w-[160] h-[20] font-inter font-regular text-[14px] leading-[20px] tracking-normal">
          About us
        </li>
        <li className="w-[160] h-[20] font-inter font-regular text-[14px] leading-[20px] tracking-normal">
          Blog
        </li>
        <li className="w-[160] h-[20] font-inter font-regular text-[14px] leading-[20px] tracking-normal">
          Contact us
        </li>
        <li className="w-[160] h-[20] font-inter font-regular text-[14px] leading-[20px] tracking-normal">
          Pricing
        </li>
        <li className="w-[160] h-[20] font-inter font-regular text-[14px] leading-[20px] tracking-normal">
          Testimonials
        </li>
      </ul>
    </div>
  );
}
