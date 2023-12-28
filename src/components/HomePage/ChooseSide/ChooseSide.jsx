import React from "react";
import PropTypes from "prop-types";
import {
	THEME_DARK,
	THEME_LIGHT,
	THEME_NEUTRAL,
	useTheme,
} from "@context/ThemeProvider";

import styles from "./ChooseSide.module.css";

const ChooseSide = () => {
	const isTheme = useTheme();

	return (
		<>
			<div>{isTheme.theme}</div>
			<button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
			<button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
			<button onClick={() => isTheme.change(THEME_NEUTRAL)}>Neutral</button>
		</>
	);
};

ChooseSide.propTypes = {
	/* personFilms: PropTypes.string, */
};

export default ChooseSide;
