import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage("pt-BR");
    }, 2000);
  }, [i18n]);

  return (
    <div className="container">
      <div className="section">
        <h1 className="title">{t("home")}</h1>
      </div>
    </div>
  );
};
