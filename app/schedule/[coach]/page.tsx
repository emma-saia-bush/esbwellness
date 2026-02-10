import { redirect } from "next/navigation";
import { coaches, CoachInfo } from "@/lib/coaches";
import { Calendarly } from "@/components/layout";
import { Text } from "@/components/ui";

interface SchedulePageProps {
  params: {
    coach: string;
  };
}

export default async function SchedulePage({ params }: any) {
  const { coach } = await params;
  console.log(coach);
  
  const coachInfo: CoachInfo | undefined = coaches.find(
    (c) => c.calendarly_link === coach,
  );

  if (!coachInfo) {
    redirect("/schedule"); 
  }

  return <Calendarly url={coachInfo.calendarly_link} />;
}
