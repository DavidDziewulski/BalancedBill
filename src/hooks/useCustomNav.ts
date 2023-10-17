import { useNavigate } from "react-router";
import { RouterPath } from "@/constants";

export const useCustomNav = (path: RouterPath) => {
    const nav = useNavigate();

    return () => {
        nav(path);
    };
}
