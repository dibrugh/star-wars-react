import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// По умолчанию обращение к index.js в папке
import App from "@containers/App";
import { Provider } from "react-redux";
import store from "@store/store";
import ThemeProvider from "@context/ThemeProvider";
import { REPO_NAME } from "@constants/repo";

import "@styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter basename={`/${REPO_NAME}/`}>
			{/* Redux Provider */}
			<Provider store={store}>
				{/* Для изменения темы используем React Context */}
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
