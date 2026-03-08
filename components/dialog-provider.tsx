"use client";

import { ConfirmDialog } from "@/components/confirm-dialog";
import { QuoteDialog } from "@/components/quote-dialog";

export const DialogProvider = () => {
  return (
    <>
      <ConfirmDialog />
      <QuoteDialog />
    </>
  );
};
