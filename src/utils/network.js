const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

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

// Ф-я удобнее при использовании с useEffect
(async () => {
    const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
})();

