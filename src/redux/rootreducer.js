import { combineReducers } from "redux";
import { profile_data_reducer } from "./reducer";
import { direc_data_reducer } from "./reducer";
import { show_pic_reducer } from "./reducer";
import { get_data_reducer } from "./reducer";

export default combineReducers({
    profile_data_reducer,
    direc_data_reducer,
    show_pic_reducer,
    get_data_reducer
})