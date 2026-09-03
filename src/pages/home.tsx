import { useTranslation } from "react-i18next";

function HomePage() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("welcome")}</h1>
            <p>{t("hello", { name: "Sultan" })}</p>
        </div>
    );
}
export default HomePage;