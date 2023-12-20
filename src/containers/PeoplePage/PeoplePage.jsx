// libraries
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// HOC
import { withErrorApi } from "@hoc-helpers/withErrorApi";
// hooks
import { useQueryParams } from "@hooks/useQueryParams";
// components
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
// utils
import { getApiResource, changeHTTP } from "@utils/network";
// constants
import { API_PEOPLE } from "@constants/api";
// services
import { getPeopleId, getPeopleImage, getPeoplePageId } from "@services/getPeopleData";

// styles
import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);
    // Получаем страницы
	const [prevPage, setPrevPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
    // Номер текущей страницы
    const [counterPage, setCounterPage] = useState(1);
	// Получаем объект URLSearchParams
	const query = useQueryParams();
	// Получаем номер страницы
	const queryPage = query.get("page");

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
				};
			});

			setPeople(peopleList);
			// Добавляем данные по наличию других страниц меняя запрос на HTTPS
			setPrevPage(changeHTTP(response.previous));
			setNextPage(changeHTTP(response.next));
            // Устанавливаем номер текущей страницы
            setCounterPage(getPeoplePageId(url));
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	// Делаем запросы на моменте монтирования
	useEffect(() => {
		/* Добавляем в конце номер страницы */
		getResource(API_PEOPLE + queryPage);
	}, [queryPage]);

	return (
		<>
			<h1 className="header__text">Navigation</h1>
			{/* Делаем проверку на наличие данных, т.к из-за default state === null будем получать ошибку*/}
			{people && <PeopleList people={people} />}
		</>
	);
};

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
};

// Оборачиваем компонент в HOC
export default withErrorApi(PeoplePage);
