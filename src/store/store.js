import { configureStore } from "@reduxjs/toolkit";
/* Можем импортировать под другим именем */
import rootReducer from "./reducers";
import { setLocalStorage } from "@utils/localStorage";

const store = configureStore({
	reducer: {
		rootReducer,
	},
});

// Подписываемся на изменения store, чтобы записывать актуальное значение в localStorage
store.subscribe(() => {
	setLocalStorage("store", store.getState().rootReducer);
});

export default store;
