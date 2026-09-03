import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>
        English
      </button>

      <button onClick={() => changeLanguage("bn")}>
        বাংলা
      </button>
    </div>
  );
}

export default LanguageSwitcher;
