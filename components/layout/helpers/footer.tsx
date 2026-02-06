import { Text } from "@/components/ui";

export function Footer() {
  return (
    <footer className="p-10 bg-background-dark">
      <div className="flex flex-col gap-8 md:flex-row items-start md:items-center justify-start md:justify-evenly">
        <Text variant="subtitle" font="serif" colorStyle="light">
          ESB Wellness
        </Text>
        <div className="flex flex-col gap-1">
          <Text variant="caption" font="sans" colorStyle="light">
            Phone
          </Text>
          <Text
            variant="body"
            font="serif"
            fontStyle="italic"
            colorStyle="light"
            className="pt-0"
          >
            (512)-900-0995
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          <Text variant="caption" font="sans" colorStyle="light">
            Email
          </Text>
          <Text
            variant="body"
            font="serif"
            fontStyle="italic"
            colorStyle="light"
            className="pt-0"
          >
            esbwellnesscenter@gmail.com
          </Text>
        </div>
      </div>
    </footer>
  );
}
