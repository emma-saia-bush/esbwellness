"use client";
import { PagePaddingWrapper } from "@/components/layout";
import { Button, Text } from "@/components/ui";
import { coaches } from "@/lib/custom";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <PagePaddingWrapper>
        <div className="flex flex-col gap-3 items-center">
          <Text variant="smalltitle" font="serif">
            Certifications
          </Text>
          <Text variant="largebody" className="text-center">
            Our coaches each bring their own areas of expertise and training.
            Below are the official certifications that support their specialties
            and approach to wellness, ensuring you receive informed, thoughtful,
            and personalized guidance.
          </Text>
        </div>
      </PagePaddingWrapper>

      {coaches.map((coach) => (
        <section
          key={coach.section_name}
          id={coach.section_name}
          className="w-full mb-10"
        >
          <div className="bg-background-accent-dark">
            <PagePaddingWrapper>
              <div className="flex flex-col items-center gap-4">
                <Text variant="subtitle" font="serif" weight="bold">
                  {`${coach.name}'s Certifications`}
                </Text>
                {coach.certifications ? (
                  coach.certifications.map((cert) => (
                    <Button
                      key={cert.link}
                      className="w-max min-w-[250px]"
                      variant="outline"
                      onClick={() => {
                        router.push(cert.link);
                      }}
                    >
                      {cert.name}
                    </Button>
                  ))
                ) : (
                  <Text className="text-foreground/60 text-center">{`${coach.name.split(" ")[0]} doesn't have any certifications to display right now`}</Text>
                )}
              </div>
            </PagePaddingWrapper>
          </div>
        </section>
      ))}
    </div>
  );
}
