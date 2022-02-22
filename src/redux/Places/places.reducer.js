import placesTypes from "./places.types";

const INITIAL_STATE = {
	places: [],
	detailPlace: {},
	focus: null
};

const placesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case placesTypes.ADD_PLACES_START:
			return {
				...state,
				places: action.payload
			};
		case placesTypes.ADD_DETAIL_START:
			return {
				...state,
				detailPlace: action.payload
			};
		case placesTypes.ADD_FOCUS_START:
			return {
				...state,
				focus: action.payload
			};

		default:
			return state;
	}
};

export default placesReducer;
