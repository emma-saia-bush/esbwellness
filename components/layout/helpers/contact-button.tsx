"use client";
import { Button, ButtonProps } from "@/components/ui";
import { useRouter } from "next/navigation";

export function ContactButton({ ...props }: ButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/contact");
      }}
      {...props}
    >
      Contact Us
    </Button>
  );
}
