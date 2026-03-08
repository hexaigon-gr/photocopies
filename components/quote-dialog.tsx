"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { BUSINESS } from "@/lib/general/constants";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const QUOTE_DIALOG = "quote";

export const QuoteDialog = () => {
  const t = useTranslations("QuoteDialog");
  const open = useDialogStore((s) => s.currentDialog === QUOTE_DIALOG);
  const closeDialog = useDialogStore((s) => s.closeDialog);
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent(t("title"));
    const body = encodeURIComponent(message);
    window.open(
      `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`,
      "_self",
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) {
          closeDialog(QUOTE_DIALOG);
          setMessage("");
        }
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

        {/* Message textarea */}
        <Textarea
          placeholder={t("messagePlaceholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="resize-none"
        />

        {/* Send button */}
        <Button
          onClick={handleSendEmail}
          disabled={!message.trim()}
          className="w-full"
        >
          <Send className="size-4" />
          {t("sendEmail")}
        </Button>

        {/* Divider */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-3 text-xs text-muted-foreground">
              {t("orContactUs")}
            </span>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-3">
          {/* Phone */}
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-3 rounded-lg border p-3 transition-colors duration-300 hover:bg-accent"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Phone className="size-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                {t("phone")}
              </p>
              <p className="text-sm font-semibold">{BUSINESS.phone}</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={BUSINESS.emailHref}
            className="flex items-center gap-3 rounded-lg border p-3 transition-colors duration-300 hover:bg-accent"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Mail className="size-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                {t("email")}
              </p>
              <p className="text-sm font-semibold">{BUSINESS.email}</p>
            </div>
          </a>

          {/* Map */}
          <a
            href={BUSINESS.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border p-3 transition-colors duration-300 hover:bg-accent"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <MapPin className="size-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                {t("findUs")}
              </p>
              <p className="text-sm font-semibold">
                {BUSINESS.address.full}
              </p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
