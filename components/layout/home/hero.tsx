"use client";

import { Text, Button } from "@/components/ui";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();
  return (
    <div className="relative px-12 flex min-h-[85vh] md:min-h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />

      <div className="relative flex flex-col w-full justify-end items-center gap-6 md:gap-10 pb-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-2 md:gap-4 flex-2">
            <Text
              font="serif"
              fontStyle="italic"
              colorStyle="light"
              className="text-2xl md:text-4xl"
            >
              Gentle nourishment and lasting healing for your mind, body, and
              soul
            </Text>
            <Text
              variant="subtitle"
              colorStyle="light"
              className="text-md md:text-xl"
            >
              You’re safe to share your symptoms, fears, and struggles here
              without being overlooked or invalidated
            </Text>
          </div>

          <div className="flex flex-1 mt-6 md:mt-0 justify-center md:justify-end md:items-end">
            <Button
              variant="outlinelight"
              size="lg"
              className="min-w-[200px]"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Schedule an appointment
            </Button>
          </div>
        </div>

        <div className="hidden md:block relative text-center">
          <Text colorStyle="light">
            Nutrition and Wellness, Gut and Hormone Health Coach | Functional
            Nutrition Counselor | Fitness Coach
          </Text>
        </div>
      </div>
    </div>
  );
}
