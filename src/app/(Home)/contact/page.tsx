import { IconMail, IconPhoneCall, IconMapPin } from "@tabler/icons-react";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-base-content flex items-center gap-3">
        <IconMail className="w-8 h-8 text-primary" /> Contact Us
      </h1>
      <div className="space-y-4 text-base-content/80">
        <p className="flex items-center gap-3">
          <IconMail /> hello@image3diffy.com
        </p>
        <p className="flex items-center gap-3">
          <IconPhoneCall /> +91-9876543210
        </p>
        <p className="flex items-center gap-3">
          <IconMapPin /> Pune, Maharashtra, India
        </p>
      </div>
    </section>
  );
}
