import { combineReducers } from "redux";

import placesReducer from "./Places/places.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; //local storage, can also be used session storage

export const rootReducer = combineReducers({
	placesData: placesReducer
});

const configStorage = {
	key: "root",
	storage,
	Whitelist: ["placesData"]
};

export default persistReducer(configStorage, rootReducer);
