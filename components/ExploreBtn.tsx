'use client'

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <a
      href="#events"
      id="explore-btn"
      onClick={() => console.log("CLICK")}
    >
      Explore Events
      <Image
        src="/icons/arrow-down.svg"
        alt="arrow-down"
        width={24}
        height={24}
      />
    </a>
  );
};

export default ExploreBtn;