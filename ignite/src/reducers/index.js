import { combineReducers } from "redux";
import gamesReducer from "../reducers/gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
});

export default rootReducer;
