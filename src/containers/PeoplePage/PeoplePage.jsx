import React, { useEffect, useState } from 'react'
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import styles from './PeoplePage.module.css';


const PeoplePage = () => {

    const [people, setPeople] = useState(null);
    // Проверку на ошибку при запросе
    const [errorApi, setErrorApi] = useState(false);

    // Получение и преобразование данных
    const getResource = async (url) => {
        const response = await getApiResource(url);
        // Если response == true
        if (response) {
            // Деструктуризацией сразу получаем name, url
            const peopleList = response.results.map(({ name, url }) => {
                // Получаем id персонажа из url
                const id = getPeopleId(url);

                const img = getPeopleImage(id);

                // Формируем объект с нужными данными
                return {
                    id,
                    name,
                    img,
                }
            })

            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    // Делаем запросы на моменте монтирования
    useEffect(() => {
        getResource(API_PEOPLE);
    }, [])


    return (
        <>
            {errorApi
                ? <h2>Error </h2>
                : (
                    <>
                        <h1>Navigation</h1>
                        {/* Делаем проверку на наличие данных, т.к из-за default state === null будем получать ошибку*/}
                        {people && <PeopleList people={people} />}
                    </>
                )
            }
        </>
    )
}

export default PeoplePage;