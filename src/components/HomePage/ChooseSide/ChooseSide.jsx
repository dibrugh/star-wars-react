import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {
	THEME_DARK,
	THEME_LIGHT,
	THEME_NEUTRAL,
	useTheme,
} from "@context/ThemeProvider";

import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";

import styles from "./ChooseSide.module.css";

/* Можно вынести компонент в отдельный файл */
const ChooseSideItem = ({ theme, text, img, classes }) => {
	const isTheme = useTheme();

	return (
		<div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
			<span className={styles.item__header}>{text}</span>
			<img className={styles.item__img} src={img} alt={text} />
		</div>
	);
};

ChooseSideItem.propTypes = {
	theme: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string,
	classes: PropTypes.string,
};

const ChooseSide = () => {
	const elements = [
		{
			classes: styles.item__light,
			theme: THEME_LIGHT,
			text: "Light Side",
			img: imgLightSide,
		},
		{
			classes: styles.item__dark,
			theme: THEME_DARK,
			text: "Dark Side",
			img: imgDarkSide,
		},
		{
			classes: styles.item__neutral,
			theme: THEME_NEUTRAL,
			text: "I`m Han Solo",
			img: imgFalcon,
		},
	];

	return (
		<div className={styles.container}>
			{elements.map(({ text, theme, img, classes }) => (
				<ChooseSideItem
					key={text}
					theme={theme}
					text={text}
					img={img}
					classes={classes}
				/>
			))}
		</div>
	);
};

export default ChooseSide;
