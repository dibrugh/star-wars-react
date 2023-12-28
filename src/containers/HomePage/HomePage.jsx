import React from "react";
import ChooseSide from "@components/HomePage/ChooseSide/ChooseSide";

import styles from "./HomePage.module.css";

const HomePage = () => {
	return (
		<>
			<ChooseSide />
			<div className="header__text">HomePage</div>
		</>
	);
};

export default HomePage;
