import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "../index.css";
import styles from "./UiButton.module.css";

const UiButton = ({ text, onClick, disabled, theme = "dark", classes }) => {
	return (
		<button
			onClick={onClick}
            /* cn - classname библиотека для группировки классов, classes - пользовательские классы, которые перетирают заранее заданные*/
			className={cn(styles.button, styles[theme], classes)}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

UiButton.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	theme: PropTypes.string,
    classes: PropTypes.string,
};

export default UiButton;
