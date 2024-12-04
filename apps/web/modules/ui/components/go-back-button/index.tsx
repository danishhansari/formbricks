"use client";

import { Button } from "@/modules/ui/components/button";
import { ArrowLeftIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const GoBackButton = ({ url }: { url?: string }) => {
  const router = useRouter();
  const t = useTranslations();
  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={() => {
        if (url) {
          router.push(url);
          return;
        }
        router.back();
      }}>
      <ArrowLeftIcon />
      {t("common.back")}
    </Button>
  );
};