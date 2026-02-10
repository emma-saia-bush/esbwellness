import { ContactForm, PagePaddingWrapper, Pricing } from "@/components/layout";
import { Text } from "@/components/ui";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <PagePaddingWrapper>
        <div className="flex flex-col gap-2 items-center">
          <Text variant="smalltitle" font="serif">
            Contact Us
          </Text>
          <Text font="serif" variant="largebody">
            For general questions, please use the form below
          </Text>
          <Text className="max-w-3xl text-center p-0 text-foreground/70">
            If you’re ready to schedule an appointment,{" "}
            <Link
              href="/schedule"
              className="underline font-semibold hover:opacity-80"
            >
              you can book time here
            </Link>
          </Text>
          <ContactForm />
          <Text className="text-foreground/70">
            {`Interested in our pricing? Check it out `}
            <Link href="/#pricing" className="underline">
              here
            </Link>
            .
          </Text>
        </div>
      </PagePaddingWrapper>
    </div>
  );
}
