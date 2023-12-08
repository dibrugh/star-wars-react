import { useState } from "react";
import ErrorMessage from "@components/ErrorMessage";

export const withErrorApi = View => {
    // Возвращаем компонент, поэтому объявление хуков в return
    return props => {
        // Проверку на ошибку при запросе
        const [errorApi, setErrorApi] = useState(false);
        return (
            <>
                {errorApi
                    ? <ErrorMessage />
                    : (
                        <View
                            setErrorApi={setErrorApi}
                            {...props}
                        />
                    )
                }
            </>
        )
    }
}