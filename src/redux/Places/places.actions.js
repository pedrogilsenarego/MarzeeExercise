import placesTypes from "./places.types";

export const addPlacesStart = (placesData) => ({
	type: placesTypes.ADD_PLACES_START,
	payload: placesData
});

export const detailPlaceStart = (placesDetail) => ({
	type: placesTypes.ADD_DETAIL_START,
	payload: placesDetail
});

export const detailFocusStart = (focusDetail) => ({
	type: placesTypes.ADD_FOCUS_START,
	payload: focusDetail
});
