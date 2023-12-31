import { Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import Header from "@components/Header/Header";

import styles from "./App.module.css";

/// Типизировать, кэшировать загрузку изображений, прелоадеры (или разобраться с Suspense)
// Можно вынести ChooseSideItem в отдельный файл
// Крайне опционально вынести массив тем из ChooseSide в store/context

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Routes>
				{routesConfig.map((route, index) => (
					<Route key={index} path={route.path} element={route.element} />
				))}
			</Routes>
		</div>
	);
};

export default App;
