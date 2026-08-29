import { useEffect, useState } from "react";

function useRouter() {
    const [path, setPath] = useState(window.location.pathname);

    const navigate = (url: string) => {
        window.history.pushState({}, "", url);
        setPath(url);
        window.location.reload();
    }
    useEffect(() => {
        const handlePopState = () => {
            setPath(window.location.pathname);
        }
        window.addEventListener("popstate", handlePopState)
        return () => {
            window.removeEventListener("popstate", handlePopState);
        }
    }, []);
    return { path, navigate };
}

export default useRouter;