// Специфичные ф-и, которые не переиспользуются в других приложениях
import {
    HTTP, HTTPS, SWAPI_PEOPLE, SWAPI_ROOT,
    URL_IMG_PERSON, GUIDE_IMG_EXTENSION,
    SWAPI_PARAM_PAGE
} from "@constants/api";

// Проверка протокола: HTTP или HTTPS
const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

export const getPeoplePageId = url => {
    // С конца ищем совпадение со строкой getPeoplePageId
    const position = url.lastIndexOf(SWAPI_PARAM_PAGE)
    // Обрезаем до id
    const id = url.slice(position + SWAPI_PARAM_PAGE.length);
    
    return Number(id);
}

const getId = (url, category) => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol + SWAPI_ROOT + category, '')
        .replace(/\//g, '');
    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;