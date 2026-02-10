"use client";

import { CoachInfo } from "@/lib/coaches";
import { Button, Text } from "@/components/ui";
import { useRouter } from "next/navigation";

interface CoachCardProps {
  coach: CoachInfo;
}

export function CoachCard({ coach }: CoachCardProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-4 border shadow-md">
      <div className="flex-shrink-1 md:min-h-64 md:max-h-64 md:aspect-square">
        <img
          src={coach.picture_url}
          alt={coach.picture_url}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 items-center md:gap-5 flex-1 p-0 md:px-15">
        <Text variant="subtitle" font="serif">
          {coach.name} — {coach.title}
        </Text>

        <Text variant="body" className="p-0">
          {coach.short_bio}
        </Text>
        <Button
          variant="outline"
          className="w-full md:w-max"
          onClick={() => router.push(`/schedule/${coach.calendarly_link}`)}
        >
          Schedule and appointment with {coach.name.split(" ")[0]}
        </Button>
      </div>
    </div>
  );
}
