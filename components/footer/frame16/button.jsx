import Image from "next/image";

export function Button() {
  return (
    <>
      <button>Get a Demo</button>
      <Image
        src="/images/Right2white.svg"
        width={16}
        height={16}
        alt="Get a Demo arrow"
      />
    </>
  );
}
