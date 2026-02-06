"use client";

import { Separator, Text } from "@/components/ui";

import { PagePaddingWrapper } from "./page-padding-wrapper";
import { consultation_price, regular_price } from "@/lib/custom";

export function Pricing() {
  return (
    <section id="pricing">
      <div className="bg-background-accent-dark my-10">
        <PagePaddingWrapper>
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-5">
              <Text variant="title" font="serif" weight="bold">
                Services & Pricing
              </Text>
              <Text variant="largebody" className="text-center md:px-16">
                We offer one-on-one coaching sessions with our clients that
                allow us to hear their stories and identify their key needs so
                we can hand-craft a protocol that fits into their lives
                seamlessly.
              </Text>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <Text font="serif" className="text-center text-8xl">
                  {consultation_price}
                </Text>
                <Text className="text-center md:px-12" font="serif">
                  Your first session is a 50-minute consultation where we review
                  your health history, goals, and current concerns.
                </Text>
              </div>
              <div className="hidden md:block">
                <Separator orientation="vertical" variant="thick" />
              </div>
              <div className="flex-1">
                <Text font="serif" className="text-center text-8xl">
                  {regular_price}
                </Text>
                <Text className="text-center md:px-12" font="serif">
                  Ongoing one-hour sessions focused on continued support,
                  progress, and personalized adjustments to your plan.
                </Text>
              </div>
            </div>
          </div>
        </PagePaddingWrapper>
      </div>
    </section>
  );
}
