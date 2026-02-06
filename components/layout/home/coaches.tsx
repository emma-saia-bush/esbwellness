"use client";
import { Button, Text } from "@/components/ui";
import { coaches } from "@/lib/coaches";
import { useRouter } from "next/navigation";
export function Coaches() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center bg-background-accent-dark gap-8 p-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <Text
          variant="title"
          font="serif"
          fontStyle="italic"
          weight="bold"
          className="text-center"
        >
          Meet Your Coaches
        </Text>
        <Text variant="largebody" font="serif" className="text-center">
          Different Strengths, One Mission: Your Health
        </Text>
      </div>
      {coaches.map((coach) => (
        <div
          className="flex flex-col md:flex-row items-center gap-10"
          key={coach.section_name}
        >
          <div className="flex-shrink-1 md:min-h-64 md:max-h-64 md:aspect-square">
            <img
              src={coach.picture_url}
              alt={coach.picture_url}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2 max-w-lg">
            <Text
              variant="title"
              className="text-3xl"
              weight="bold"
              font="serif"
            >
              {coach.name}
            </Text>
            <Text variant="subtitle" font="serif" fontStyle="italic">
              {coach.title}
            </Text>
            <Text variant="body">{coach.short_bio}</Text>
            <div>
              <Button
                variant="link"
                className="pl-0"
                onClick={() => {
                  router.push(`/about#${coach.section_name}`);
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
