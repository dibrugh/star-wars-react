import {
	ADD_PERSON_TO_FAVORITE,
	REMOVE_PERSON_FROM_FAVORITE,
} from "@store/constants/actionTypes";

// Пример того, как будет выглядеть store
/* const store = {
	2: {
		name: "C-3PO",
		img: "",
	},
	8: {
		name: "R5-D4",
		img: "",
	},
}; */

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload,
			};
		case REMOVE_PERSON_FROM_FAVORITE:
			/* Записываем state[action.payload] в переменную deleting */
			const { [action.payload]: deleting, ...rest } = state;
			return {
				...rest,
			};
		default:
			return state;
	}
};

export default favoriteReducer;
