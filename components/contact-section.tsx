"use client";

import { useTranslations } from "next-intl";
import { BUSINESS } from "@/lib/general/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
  FileText,
  Send,
} from "lucide-react";
import { type FormEvent, useState } from "react";

const ContactSection = () => {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${t("formName")}: ${formData.name}\n${t("formEmail")}: ${formData.email}\n${t("formPhone")}: ${formData.phone}\n${t("formSubject")}: ${formData.subject}\n\n${formData.message}`;
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column: Contact info + map */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">{t("address")}</p>
                <a
                  href={BUSINESS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {BUSINESS.address.full}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">{t("phone")}</p>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="size-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">{t("email")}</p>
                <a
                  href={BUSINESS.emailHref}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3">
              <Clock className="size-5 text-primary mt-0.5 shrink-0" />
              <div className="w-full">
                <p className="font-medium mb-2">{t("hours")}</p>
                <div className="grid grid-cols-2 gap-y-1.5 text-sm">
                  {BUSINESS.hours.map((schedule) => (
                    <div key={schedule.day} className="contents">
                      <span className="text-muted-foreground">
                        {t(schedule.day)}
                      </span>
                      <span className="text-right">
                        {schedule.open
                          ? `${schedule.open} - ${schedule.close}${
                              "open2" in schedule && schedule.open2
                                ? `, ${schedule.open2} - ${schedule.close2}`
                                : ""
                            }`
                          : t("closed")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="w-full aspect-video rounded-lg overflow-hidden mt-6">
              <iframe
                src={BUSINESS.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>

          {/* Right column: Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="contact-name"
                  className="flex items-center gap-1.5"
                >
                  <User className="inline size-3.5" />
                  {t("formName")}
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="contact-email"
                  className="flex items-center gap-1.5"
                >
                  <Mail className="inline size-3.5" />
                  {t("formEmail")}
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label
                  htmlFor="contact-phone"
                  className="flex items-center gap-1.5"
                >
                  <Phone className="inline size-3.5" />
                  {t("formPhone")}
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label
                  htmlFor="contact-subject"
                  className="flex items-center gap-1.5"
                >
                  <FileText className="inline size-3.5" />
                  {t("formSubject")}
                </Label>
                <Input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="contact-message"
                  className="flex items-center gap-1.5"
                >
                  <MessageSquare className="inline size-3.5" />
                  {t("formMessage")}
                </Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full">
                <Send className="size-4 mr-2" />
                {t("formSend")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
