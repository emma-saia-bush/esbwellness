"use client";

import {
  Text,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui";
import { Menu, Salad } from "lucide-react";
import { ContactButton } from "./contact-button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { coaches } from "@/lib/coaches";

export function Navbar() {
  const router = useRouter();

  return (
    <header>
      <div className="flex justify-between itmes-center p-4 px-6 bg-background-dark">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            {/* <Salad className="text-foreground-light mt-1" size={24} /> */}
            <Text
              variant="body"
              className="font-bold"
              font="serif"
              colorStyle="light"
            >
              ESB Wellness
            </Text>
          </div>
        </Link>
        <div className="flex items-center">
          <ContactButton variant="linklight" />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="text-foreground-light" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-6 gap-9">
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Contact Us
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push(`/about`)}>
                About Your Coaches
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Schedule Appointment With </DropdownMenuLabel>
              {coaches.map((coach) => (
                <DropdownMenuItem
                  key={coach.section_name}
                  onClick={() =>
                    router.push(`/schedule/${coach.calendarly_link}`)
                  }
                >
                  {coach.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
