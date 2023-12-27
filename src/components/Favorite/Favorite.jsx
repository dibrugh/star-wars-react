import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import icon from "./img/bookmark.svg";
import styles from "./Favorite.module.css";

const Favorite = () => {
	const [count, setCount] = useState();

	const storeData = useSelector((state) => state.rootReducer);

	useEffect(
		() => {
			const length = Object.keys(storeData).length;
            // Ограничиваем количество отображаемых цифр в count
            length.toString().length > 2 ? setCount('...') : setCount(length);
		} /* [storeData] */
	);
	return (
		<div className={styles.container}>
			<Link to={"/favorites"}>
				<span className={styles.counter}>{count}</span>
				<img src={icon} className={styles.icon} alt="favorites icon" />
			</Link>
		</div>
	);
};

export default Favorite;
