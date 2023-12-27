import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removePersonFromFavorite, setPersonToFavorite } from "@store/actions";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";
import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
	personPhoto,
	personName,
	personId,
	personFavorite,
	setPersonFavorite,
}) => {
	// Для изменения стора используем useDispatch
	const dispatch = useDispatch();

	/* const set = () => {
		dispatch(
			setPersonToFavorite({
				[personId]: {
					name: personName,
					img: personPhoto,
				},
			})
		);
		setPersonFavorite(true);
	};
	const remove = () => {
		dispatch(removePersonFromFavorite(personId));
		setPersonFavorite(false);
	}; */

	const dispatchFavoritePeople = () => {
		if (personFavorite) {
			dispatch(removePersonFromFavorite(personId));
			setPersonFavorite(false);
		} else {
			dispatch(
				setPersonToFavorite({
					[personId]: {
						name: personName,
						img: personPhoto,
					},
				})
			);
			setPersonFavorite(true);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
				{/* По ARIA интерактивный элемент должен быть button */}
				<img
					className={styles.favorite}
					onClick={dispatchFavoritePeople}
					src={personFavorite ? iconFavoriteFill : iconFavorite}
					alt="Add to favorite"
				/>
			</div>

			{/* <button onClick={dispatchFavoritePeople}>
				{personFavorite ? "Удалить из избранного" : "Добавить в избранное"}
			</button> */}
		</>
	);
};

PersonPhoto.propTypes = {
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
	/* число в виде строки */
	personId: PropTypes.string,
	personFavorite: PropTypes.bool,
	setPersonFavorite: PropTypes.func,
};
export default PersonPhoto;
