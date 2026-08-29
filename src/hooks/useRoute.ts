import { useState } from "react";

function useRouter() {
    const [path, setPath] = useState(window.location.pathname);

    const navigate = (url: string) => {
        window.history.pushState({}, "", url);
        setPath(url);
    }
    return { path, navigate };
}

export default useRouter;