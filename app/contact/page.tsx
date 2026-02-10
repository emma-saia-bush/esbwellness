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
          <Text font="serif" variant="largebody" className="text-center">
            For general questions, please use the form below
          </Text>
          <Text className="text-center p-0 text-foreground/70">
            Ready to schedule an appointment?{" "}
            <Link href="/schedule" className="underline">
              Book time here
            </Link>
          </Text>
          <ContactForm />
          <Text className="text-foreground/70">
            {`Interested in our pricing? `}
            <Link href="/#pricing" className="underline">
              View here
            </Link>
            .
          </Text>
        </div>
      </PagePaddingWrapper>
    </div>
  );
}
