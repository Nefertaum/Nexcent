export function Userbuttons() {
  return (
    <div className="inline-flex gap-[14px]">
      <button className="text-[#4CAF4F] rounded-md pt-[10px] pr-[20px] pb-[10px] pl-[20px] font-medium  font-inter text-[14px] leading-[20px]">
        Login
      </button>
      <button
        type="button"
        className="tracking-normal bg-[#4CAF4F] w-[91] h-[40] rounded-md pt-[10px] pr-[20px] pb-[10px] pl-[20px] font-medium text-[#FFFFFF] font-inter text-[14px] leading-[20px]"
      >
        Sign up
      </button>
    </div>
  );
}
