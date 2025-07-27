import Image from "next/image";

export function Image1() {
  return (
    <div className="w-[368] h-[286] z-0">
      <Image
        src="/images/Community_image3of3.svg"
        width={368}
        height={286}
        alt="OneRen image"
        objectFit="cover"
      />
    </div>
  );
}
