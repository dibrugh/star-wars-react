import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PeopleList from "@components/PeoplePage/PeopleList";

import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
	const [people, setPeople] = useState([]);
	// Получаемым данные из store через useSelector
	const storeData = useSelector((state) => state.rootReducer);
	useEffect(() => {
		const arr = Object.entries(storeData);
		if (arr.length) {
			/* Преобразовываем store в соответствии с компонентов PeopleList (т.е id, name, img) */
			const res = arr.map((item) => {
				return {
					id: item[0],
					/* или item[1].name, item[1].img, */
					...item[1],
				};
			});
			setPeople(res);
		}
	}, []);
	return (
		<div>
			<h1 className="header__text">Favorites Page</h1>
			{people.length ? (
				<PeopleList people={people} />
			) : (
				<h2 className={styles.comment}>No data</h2>
			)}
		</div>
	);
};

export default FavoritesPage;
