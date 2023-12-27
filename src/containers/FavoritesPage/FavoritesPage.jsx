import React from "react";
import { useSelector } from "react-redux";

import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
    // Получаемым данные из store через useSelector
    const storeData = useSelector(state => state.rootReducer);
    console.log(storeData)
	return <div>FavoritesPage</div>;
};

export default FavoritesPage;
