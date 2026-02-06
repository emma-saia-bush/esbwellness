"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Textarea,
  Field,
  FieldLabel,
  FieldError,
  Input,
  Button,
} from "@/components/ui";
import {
  sendAdminContactEmail,
  sendUserContactEmail,
} from "@/lib/mail/contact-email";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .refine((value) => value.includes("@"), {
      message: "Invalid email address",
    }),
  notes: z.string().min(1, "Note is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      setLoading(true);
      await sendAdminContactEmail(data);
      await sendUserContactEmail(data);
      toast.success(
        "Information submitted successfully! We'll be in touch soon.",
      );
    } catch {
      toast.error(
        "Sorry, there was an error submitting your information. Please try again later or email us directly at esbwellnesscenter@gmail.com.",
      );
    }
    setLoading(false);
    reset();
  }

  return (
    <div className="w-full max-w-3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-4">
            <Field className="w-full">
              <FieldLabel htmlFor="firstName">First name</FieldLabel>
              <Input
                id="firstName"
                className="w-full"
                {...register("firstName")}
              />
              {errors.firstName && (
                <FieldError>{errors.firstName.message}</FieldError>
              )}
            </Field>

            <Field className="w-full">
              <FieldLabel htmlFor="lastName">Last name</FieldLabel>
              <Input
                id="lastName"
                className="w-full"
                {...register("lastName")}
              />
              {errors.lastName && (
                <FieldError>{errors.lastName.message}</FieldError>
              )}
            </Field>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            <Field className="w-full">
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" className="w-full" {...register("phone")} />
              {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
            </Field>

            <Field className="w-full">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" className="w-full" {...register("email")} />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="notes">Notes</FieldLabel>
            <Textarea
              id="notes"
              className="w-full min-h-[150px]"
              {...register("notes")}
            />
            {errors.notes && <FieldError>{errors.notes.message}</FieldError>}
          </Field>
          <div className="flex w-full justify-center">
            <Button
              type="submit"
              className="w-full max-w-xs"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
