import { Text, Separator } from "@/components/ui";

export function Solution() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 md:pr-20 md:py-10">
      <div className="flex-1">
        <img
          src="/solution.jpg"
          alt="about-emma"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block">
        <Separator orientation="vertical" variant="thick" />
      </div>
      <div className="flex flex-col justify-center flex-1 gap-6 p-10 pt-0 md:p-0 md:pt-4 md:pb-3">
        <Text
          className="text-3xl leading-tights"
          font="serif"
          fontStyle="italic"
        >
          It’s Not “Just Normal”
        </Text>
        <Text variant="largebody">
          Have you ever gone to a doctor for unexplained weight gain, painful or
          missing periods, acne, hair loss, or other hormone-related
          symptoms-only to be told “that’s normal” or prescribed medication
          without real answers?
        </Text>
        <Text variant="largebody" font="sans" fontStyle="italic">
          We’ve experienced it ourselves, and we’re committed to doing things
          differently.
        </Text>

        <Text
          className="text-3xl leading-tight"
          font="serif"
          fontStyle="italic"
        >
          Your Health, Taken Seriously
        </Text>

        <Text variant="largebody">
          We believe women’s health should be recognized, respected, and
          supported. Every woman deserves the tools to understand her body, take
          charge of her health, and believe in a different reality for herself.
        </Text>
      </div>
    </div>
  );
}
