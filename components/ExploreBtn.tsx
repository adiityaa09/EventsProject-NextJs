'use client'

import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
  return (
    <a
      href="#events"
      id="explore-btn"
      onClick={() => posthog.capture("explore_events_clicked")}
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