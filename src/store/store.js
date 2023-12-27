import { configureStore } from "@reduxjs/toolkit";
/* Можем импортировать под другим именем */
import rootReducer from "./reducers";

const store = configureStore({
	reducer: {
		rootReducer,
	},
});

export default store;
