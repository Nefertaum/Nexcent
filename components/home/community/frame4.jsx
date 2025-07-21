import Image from "next/image";

export function Frame4() {
  return (
    <>
      <div>
        <Image
          src="images/Membership.svg"
          width={65}
          height={56}
          alt="membership"
        />
        <h3>Membership Organisations</h3>
        <p>
          Our membership management software provides full automation of
          membership renewals and payments
        </p>
      </div>
      <div>
        <Image
          src="/images/National.svg"
          width={65}
          height={56}
          alt="national"
        />
        <h3>National Associations</h3>
        <p>
          Our membership management software provides full automation of
          membership renewals and payments
        </p>
      </div>
      <div>
        <Image src="/images/Clubs.svg" width={65} height={56} alt="clubs" />
        <h3>Clubs And Groups</h3>
        <p>
          Our membership management software provides full automation of
          membership renewals and payments
        </p>
      </div>
    </>
  );
}
