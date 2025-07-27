import Image from "next/image";

export function Illustration() {
  return (
    <div className="w-[391] h-[407]">
      <Image
        src={"/images/Illustration.svg"}
        width={391}
        height={407}
        alt="Illustration_character"
      ></Image>
    </div>
  );
}
