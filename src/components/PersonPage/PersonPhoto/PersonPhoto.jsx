import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removePersonFromFavorite, setPersonToFavorite } from "@store/actions";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({ personPhoto, personName, personId }) => {
	// Для изменения стора используем useDispatch
	const dispatch = useDispatch();

	const set = () => {
		dispatch(
			setPersonToFavorite({
				[personId]: {
					name: personName,
					img: personPhoto,
				},
			})
		);
	};
	const remove = () => {
		dispatch(removePersonFromFavorite(personId));
	};
	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
			</div>
			<button onClick={set}>Доавить в избранное</button>
			<button onClick={remove}>Удалить из избранного</button>
		</>
	);
};

PersonPhoto.propTypes = {
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
	/* число в виде строки */
	personId: PropTypes.string,
};
export default PersonPhoto;
