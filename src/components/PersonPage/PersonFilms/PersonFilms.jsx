import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeConcurrentRequest } from "@utils/network";
import UiLoading from '@ui/UiLoading'

import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }) => {
	const [filmsName, setFilmsName] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await makeConcurrentRequest(personFilms);
			setFilmsName(response);
		})();
	}, []);

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list__container}>
				{(!filmsName.length) && <UiLoading />}
				{filmsName
					/* После promise all нужно отсортировать по порядку*/
					.sort((a, b) => a.episode_id - b.episode_id)
					.map(({ title, episode_id }) => (
						<li className={styles.list__item} key={episode_id}>
							<span className={styles.item__episode}>Episode {episode_id}</span>
							<span className={styles.item__colon}>:</span>
							<span className={styles.item__title}>{title}</span>
						</li>
					))}
			</ul>
		</div>
	);
};

PersonFilms.propTypes = {
	personFilms: PropTypes.array,
};

export default PersonFilms;
