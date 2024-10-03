import React from "react";
import { useTranslation } from "react-i18next";

const Notfound = () => {
  const { t } = useTranslation();
  return <div>{t("NotFound")}</div>;
};

export default Notfound;
