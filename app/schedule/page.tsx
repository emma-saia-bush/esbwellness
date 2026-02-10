import { CoachCard, PagePaddingWrapper, Pricing } from "@/components/layout";
import { Text } from "@/components/ui";
import { coaches } from "@/lib/coaches";
import Link from "next/link";

export default function Contact() {
  return (
    <PagePaddingWrapper>
      <div className="flex flex-col items-center mx-auto gap-5 max-w-2xl bg-green-200">
        <Text variant="smalltitle" font="serif" fontStyle="italic">
          Ready to Schedule an appointment?
        </Text>
        <Text
          variant="largebody"
          className="max-w-3xl text-left md:text-center"
        >
          Select the coach that matches your goals. New clients start with a
          consultation, returning clients can book regular sessions — in both
          cases, you choose your coach first.
        </Text>

        {coaches.map((coach) => (
          <CoachCard coach={coach} key={coach.section_name} />
        ))}

        <Pricing />
      </div>
    </PagePaddingWrapper>
  );
}
