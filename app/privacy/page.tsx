import { Text } from "@/components/ui/text";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-6 p-10 md:px-3">
      <Text variant="title" weight="bold">
        Privacy Policy
      </Text>

      <Text>
        This Privacy Policy explains how <strong>ESB Wellness</strong> (“we,”
        “us,” or “our”) collects, uses, and protects your personal information
        when you visit our website or use our services.
      </Text>

      <Text>
        By using our website, you agree to the collection and use of information
        in accordance with this policy.
      </Text>

      <Text variant="subtitle" weight="bold">
        1. Information We Collect
      </Text>

      <Text>We may collect the following types of information:</Text>

      <ul className="list-disc pl-10 flex flex-col gap-2">
        <li>
          <Text>
            <strong>Personal Information:</strong> Such as your name, email
            address, and any other information you voluntarily provide through
            forms or scheduling tools.
          </Text>
        </li>
        <li>
          <Text>
            <strong>Usage Data:</strong> Limited technical information such as
            your IP address or browser type, collected only when interacting
            with third-party services.
          </Text>
        </li>
      </ul>

      <Text variant="subtitle" weight="bold">
        2. How We Use Your Information
      </Text>

      <ul className="list-disc pl-12 flex flex-col gap-2">
        <li>
          <Text>Provide and operate our services</Text>
        </li>
        <li>
          <Text>Schedule appointments and communicate with you</Text>
        </li>
        <li>
          <Text>Respond to inquiries or requests</Text>
        </li>
      </ul>

      <Text variant="subtitle" weight="bold">
        3. Scheduling & Third-Party Services (Calendly)
      </Text>

      <Text>
        We use <strong>Calendly</strong>, a third-party scheduling service, to
        allow users to book appointments.
      </Text>

      <Text>
        When you schedule an appointment through Calendly, Calendly may collect
        personal information such as your name, email address, and scheduling
        preferences. This information is processed according to Calendly’s
        privacy practices.
      </Text>

      <Text>
        Calendly may use cookies and similar technologies as part of providing
        its service.
      </Text>

      <Text>
        You can learn more about how Calendly handles data by visiting their
        privacy policy:{" "}
        <a
          href="https://calendly.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          https://calendly.com/privacy
        </a>
      </Text>

      <Text variant="subtitle" weight="bold">
        4. Cookies
      </Text>

      <Text>
        We do <strong>not</strong> use cookies or similar tracking technologies
        on our website.
      </Text>

      <Text>
        However, third-party services embedded on our site, such as Calendly,
        may place cookies on your device when you interact with their content.
        These cookies are managed entirely by the third-party providers and are
        not controlled by us.
      </Text>

      <Text>
        You can manage or disable cookies through your browser settings. Please
        note that doing so may affect the functionality of third-party services.
      </Text>

      <Text variant="subtitle" weight="bold">
        5. Data Sharing
      </Text>

      <Text>We do not sell your personal information.</Text>

      <Text>
        We only share information with third-party service providers when
        necessary to deliver our services (for example, scheduling appointments
        via Calendly).
      </Text>

      <Text variant="subtitle" weight="bold">
        6. Data Security
      </Text>

      <Text>
        We take reasonable measures to protect your personal information.
        However, no method of transmission over the internet is completely
        secure.
      </Text>

      <Text variant="subtitle" weight="bold">
        7. Your Rights
      </Text>

      <Text>
        Depending on your location, you may have rights to access, correct, or
        request deletion of your personal information.
      </Text>

      <Text>
        To exercise these rights, please contact us at{" "}
        <i>esbwellnesscenter@gmail.com</i>.
      </Text>

      <Text variant="subtitle" weight="bold">
        8. Changes to This Policy
      </Text>

      <Text>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </Text>

      <Text variant="subtitle" weight="bold">
        9. Contact Us
      </Text>

      <Text>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </Text>

      <Text>
        <strong>Email:</strong> esbwellnesscenter@gmail.com
      </Text>

      <Text>
        <i>Last Updated:</i> Febuary 9, 2026
      </Text>
    </div>
  );
}
