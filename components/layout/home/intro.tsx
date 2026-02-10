import { Text, Separator } from "@/components/ui";

export function Intro() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-10 p-10 md:px-20 md:py-16 max-w-6xl">
        <div>
          <Separator orientation="vertical" variant="thick" />
        </div>
        <div className="flex flex-col gap-2 pt-2 pb-3">
          <Text className="text-2xl leading-tight" font="serif" weight="bold">
            It’s possible to have healthy cycles, wholesome nutrition, and
            balanced hormones for women in every season.
          </Text>
          <Text variant="largebody">
            We help women support hormone health through holistic nutrition,
            functional fitness, and sustainable lifestyle habits. We support you
            in feeling strong, energized, and balanced before, during, and after
            pregnancy
          </Text>
        </div>
      </div>
    </div>
  );
}
