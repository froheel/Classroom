import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {tempReducer} from "./tempReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    temp: tempReducer
})