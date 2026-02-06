"use client";

import {
  Text,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui";
import { Menu } from "lucide-react";
import { ContactButton } from "./contact-button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  return (
    <header>
      <div className="flex justify-between itmes-center p-4 px-6 bg-background-dark">
        <Link href={"/"}>
          <Text
            variant="body"
            className="font-bold"
            font="serif"
            colorStyle="light"
          >
            ESB Wellness
          </Text>
        </Link>
        <div className="flex items-center">
          <ContactButton variant="linklight" />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="text-foreground-light" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4">
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/");
                }}
              >
                <Text variant="body" font="serif">
                  Home
                </Text>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/contact");
                }}
              >
                <Text variant="body" font="serif">
                  Contact Us
                </Text>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">
                  <Text variant="body" font="serif">
                    Your Coaches
                  </Text>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/#pricing">
                  <Text variant="body" font="serif">
                    Pricing
                  </Text>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
