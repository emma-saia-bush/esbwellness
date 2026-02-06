"use client";

import { Text, Separator, Button } from "@/components/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function CallToAction() {
  const router = useRouter();
  return (
    <section className="flex flex-col md:flex-row w-full h-full pb-10">
      <div className="relative flex-1 min-h-[300px]">
        <Image
          src="/call-to-action.jpg"
          alt="People collaborating"
          fill
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6 p-10 md:py-20">
        <Text variant="smalltitle" weight="bold" font="serif">
          We’d love to support your next step toward a healthier life
        </Text>
        <Separator />
        <Text variant="largebody" className="max-w-md">
          Wherever you are on your health journey, we meet you there. Together,
          we’ll create sustainable habits that support your body, your mind, and
          your everyday life.
        </Text>
        <Button
          variant="outline"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
