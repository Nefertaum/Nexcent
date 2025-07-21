import Image from "next/image";

export function Illustration() {
  return (
    <>
      <Image
        src={"/images/Illustration.svg"}
        width={391}
        height={407}
        alt="Illustration_character"
      ></Image>
    </>
  );
}
