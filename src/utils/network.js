import { HTTP, HTTPS } from "@constants/api";
// Ф-и, которые могут быть переиспользованы

/**
 * Отправляет запрос Fetch 
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
    try {
        const response = await fetch(url);
        // Отдельно обрабатываем 404
        if (!response.ok) {
            console.error('Could not fetch.', response.status);
            return false;
        }

        return await response.json();
    } catch (error) {
        console.error('Could not fetch.', error.message)
        // Чтобы потом в компонентах можно было проверять на истинность
        return false;
    }
}

/**
 * Изменяет URL с HTTP на HTTPS дабы не было проблем с запросами при деплое
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */ 
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result;
}

// Ф-я удобнее при использовании с useEffect
/* (async () => {
    const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
})(); */

// Проходим по массиву url-ов и резолвим все
export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(result => {
        return fetch(result).then(res => res.json())
    }));

    return res;
}