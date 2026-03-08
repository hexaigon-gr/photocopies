"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/lib/stores/dialog-store";
import { QUOTE_DIALOG } from "@/components/quote-dialog";
import { cn } from "@/lib/general/utils";
import { MessageSquareText } from "lucide-react";

interface QuoteButtonProps {
  hero?: boolean;
}

export const QuoteButton = ({ hero }: QuoteButtonProps) => {
  const t = useTranslations("QuoteDialog");
  const openDialog = useDialogStore((s) => s.openDialog);

  return (
    <Button
      size="lg"
      variant="outline"
      onClick={() => openDialog(QUOTE_DIALOG)}
      className={cn(
        "cursor-pointer",
        hero &&
          "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
      )}
    >
      <MessageSquareText className="size-4" />
      {t("button")}
    </Button>
  );
};
