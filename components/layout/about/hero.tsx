"use client";

import { Separator, Text } from "@/components/ui";
import Image from "next/image";
import { PagePaddingWrapper } from "../helpers/page-padding-wrapper";

export function AboutHero() {
  return (
    <PagePaddingWrapper>
      <div className="w-full flex flex-col md:flex-row gap-10 md:p-10">
        <div className="flex flex-col justify-center flex-1 gap-6 md:py-30">
          <Text variant="subtitle">Welcome!</Text>
          <Text variant="title" font="serif" weight="bold">
            Meet Your Coaches
          </Text>
          <Text variant="subtitle" font="sans" fontStyle="italic">
            We’ve been through the struggles of hormonal imbalance and gut
            health challenges ourselves, and we’re committed to helping women
            heal differently.
          </Text>
        </div>
        <div className="relative flex-1 min-h-[500px] md:min-h-full">
          <Image
            src="/about-hero.jpg"
            alt="picture-of-emma-and-rachel"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </PagePaddingWrapper>
  );
}
