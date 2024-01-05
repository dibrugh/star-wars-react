import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "@components/Favorite";
import {
	THEME_DARK,
	THEME_LIGHT,
	THEME_NEUTRAL,
	useTheme,
} from "@context/ThemeProvider";

import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";
import styles from "./Header.module.css";

const Header = () => {
	// Получаем доступ к свойству theme, чтобы читать его
	const isTheme = useTheme();
	const [icon, setIcon] = useState(imgSpaceStation);

	useEffect(() => {
		switch (isTheme.theme) {
			case THEME_LIGHT:
				setIcon(imgLightsaber);
				break;
			case THEME_DARK:
				setIcon(imgSpaceStation);
				break;
			case THEME_NEUTRAL:
				setIcon(imgDroid);
				break;

			default:
				setIcon(imgSpaceStation);
		}
	}, [isTheme]);

	return (
		<div className={styles.container}>
			<img className={styles.logo} src={icon} alt="Star Wars logo" />
			<ul className={styles.list__container}>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink to={"/people?page=1"}>People</NavLink>
				</li>
				<li>
					<NavLink to={"/search"}>Search</NavLink>
				</li>
				<li>
					<NavLink to={"/not-found"}>Not Found</NavLink>
				</li>
				<li>
					<NavLink to={"/fail"}>Fail</NavLink>
				</li>
			</ul>
			<Favorite />
		</div>
	);
};

export default Header;
