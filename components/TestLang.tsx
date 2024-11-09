"use client"
import React from 'react'
import {useLocale, useTranslations} from 'next-intl';

export default function TestLang() {
    const locale = useLocale();
    const t = useTranslations("HomePage");
  return (
    <div>{t("ourService")} - {locale} - {t("ourExpert")}</div>
  )
}
