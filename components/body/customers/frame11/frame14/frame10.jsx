import Image from "next/image";

export function Frame10() {
  return (
    <div className="inline-flex w-[493] h-[48] gap-[41px]">
      <Image src="/images/icon1of7.svg" width={48} height={48} alt="1of7" />
      <Image src="/images/icon2of7.svg" width={48} height={48} alt="2of7" />
      <Image src="/images/icon3of7.svg" width={48} height={48} alt="3of7" />
      <Image src="/images/icon4of7.svg" width={48} height={48} alt="4of7" />
      <Image src="/images/icon5of7.svg" width={48} height={48} alt="5of7" />
      <Image src="/images/icon6of7.svg" width={48} height={48} alt="6of7" />
    </div>
  );
}
