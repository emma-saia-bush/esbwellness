"use client";

import { Text, Separator, Button, ExternalLink } from "@/components/ui";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Offer() {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse w-full h-full justify-center md:flex-row md:items-stretch md:pl-20 md:gap-8">
      <div className="flex-1 flex flex-col gap-8 p-10 md:px-0">
        <Text variant="title" weight="bold" className="text-center">
          What We Offer
        </Text>
        <div className="flex flex-col gap-4">
          <Text variant="body" font="serif" fontStyle="italic">
            Personalized support tailored to your body and goals
          </Text>
          <Text variant="smalltitle" font="serif">
            One-On-One Health Coaching
          </Text>
          <Text className="subtitl pt-0">
            You don’t need a one-size-fits-all plan. One-on-one coaching
            provides individualized guidance, accountability, and support
            tailored to your body and season of life.
          </Text>
          <div>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Take Your First Step
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <Text variant="body" font="serif" fontStyle="italic">
            Individualized wellness guidance for your body and lifestyle
          </Text>
          <Text variant="smalltitle" font="serif">
            Wellness Community Subscription
          </Text>
          <Text variant="body" className="pt-0">
            Rad Health & Wellness provides individualized guidance,
            accountability, and support designed for your body and your season
            of life.
          </Text>
          <div>
            <ExternalLink href="https://rad-health-wellness.circle.so">
              <Button size="lg" variant="outline">
                Join Now
              </Button>
            </ExternalLink>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-[500px] relative">
        <Image
          src="/offer.jpg"
          alt="image-with-esb-wellness-logo"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
