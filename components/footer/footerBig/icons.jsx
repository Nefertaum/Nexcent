import Image from "next/image";

export function Icons() {
  return (
    <>
      <Image
        src="/images/Footer_icon1of4.svg"
        width={32}
        height={32}
        alt="instagram icon"
      />
      <Image
        src="/images/Footer_icon2of4.svg"
        width={32}
        height={32}
        alt="web icon"
      />
      <Image
        src="/images/Footer_icon3of4.svg"
        width={32}
        height={32}
        alt="twiter icon"
      />
      <Image
        src="/images/Footer_icon4of4.svg"
        width={32}
        height={32}
        alt="youtube icon"
      />
    </>
  );
}
