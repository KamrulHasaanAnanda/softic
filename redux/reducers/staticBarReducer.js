import { SET_DATA } from "../types";

const initialState = {
    data: [],
  };

  export default function staticBarReducer(state = initialState, action) {
    switch (action.type) {
      case SET_DATA:
        return {
          ...state,
          data: action.payload,
        };
       
      default:
        return state;
    }
  }