"use client";

import { Button, Separator, Text } from "@/components/ui";
import { PagePaddingWrapper } from "../helpers/page-padding-wrapper";
import { CoachInfo } from "@/lib/coaches";
import { useRouter } from "next/navigation";

type AboutSectionType = {
  coach: CoachInfo;
};
export function AboutSection({ coach }: AboutSectionType) {
  const first_name = coach.name.split(" ")[0];
  const router = useRouter();
  return (
    <section id={coach.section_name} key={coach.section_name}>
      <div className="bg-background-accent-dark">
        <PagePaddingWrapper>
          <div className="flex flex-col gap-3 md:gap-7">
            <div className="flex flex-col md:flex-row md:justify-between">
              <Text variant="smalltitle" font="serif">
                About {first_name}
              </Text>
              <Button
                variant="link"
                className="w-max px-0"
                onClick={() => {
                  router.push(`/certifications#${coach.section_name}`);
                }}
              >
                View Certificates
              </Button>
            </div>
            <div>
              <Separator />
            </div>
            <div className="flex flex-col gap-5">
              {coach.bio.map((paragraph, index) => (
                <Text variant="largebody" key={index}>
                  {paragraph}
                </Text>
              ))}
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-4">
              <Button variant="outline" className="w-max">
                {`Schedule An Appointment With ${first_name}`}
              </Button>
              {coach.custom_button && (
                <a
                  href={coach.custom_button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">{coach.custom_button.title}</Button>
                </a>
              )}
            </div>
          </div>
        </PagePaddingWrapper>
      </div>
    </section>
  );
}
