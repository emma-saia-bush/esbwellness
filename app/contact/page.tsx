import { ContactForm, PagePaddingWrapper, Pricing } from "@/components/layout";
import { Text } from "@/components/ui";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <PagePaddingWrapper>
        <div className="flex flex-col gap-4 items-center">
          <Text variant="smalltitle" font="serif">
            Contact Us
          </Text>
          <Text
            variant="largebody"
            font="serif"
            className="max-w-lg text-center"
          >
            Ready to get started or need more information? Send us a message and
            we’ll be in touch soon.
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
