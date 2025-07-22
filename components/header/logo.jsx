import Image from "next/image";
/*    width: 154.49041748046875;
height: 24;
top: 30px;
left: 105px;
gap: 8px;
angle: 0 deg;
opacity: 1; */
export function Logo() {
  return (
    <>
      <Image
        src="/images/Logo.svg"
        width={154.49041748046875}
        height={24}
        alt="logo image"
      />
    </>
  );
}
