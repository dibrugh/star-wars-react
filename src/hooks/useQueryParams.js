import { useLocation } from "react-router"

export const useQueryParams = () => {
    // Возвращаем 
    return new URLSearchParams(useLocation().search);
}