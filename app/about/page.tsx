import { AboutSection, AboutHero } from "@/components/layout";
import { coaches } from "@/lib/custom";

export default function Home() {
  return (
    <div>
      <AboutHero />
      <div className="flex flex-col gap-10 pb-10">
        {coaches.map((coach) => (
          <AboutSection coach={coach} key={coach.section_name} />
        ))}
      </div>
    </div>
  );
}
