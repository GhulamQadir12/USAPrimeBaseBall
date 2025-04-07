import { ADD_PROFILEDATA } from "./constants";
import { ADD_DIRECPROFILEDATA } from "./constants";
import { SHOW_PIC } from "./constants";
import { FIREBASE_DATA } from "./constants";
import { UPDATE_FIREBASE_DATA } from "./constants";
const initialState = 0;
const initialState2 = 0;
const initialState3 = true;
const initialState4 = 0;

export const profile_data_reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PROFILEDATA:
        return action.data;
      default:
        return state;
    }
  };

  export const direc_data_reducer = (state = initialState2, action) => {
    switch (action.type) {
      case ADD_DIRECPROFILEDATA:
        return action.data;
      default:
        return state;
    }
  };

  export const show_pic_reducer = (state = initialState3, action) => {
    switch (action.type) {
      case SHOW_PIC:
        return action.data;
      default:
        return state;
    }
  };

  export const get_data_reducer = (state = initialState4, action) => {
    switch (action.type) {
      case FIREBASE_DATA:
        return action.data;
        // case UPDATE_FIREBASE_DATA:
        //   return 
      default:
        return state;
    }
  };
  


