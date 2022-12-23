import { SET_DATA, SET_LOADER } from "../types";

const initialState = {
    data: [],
    loading: false,
  };

  export default function staticBarReducer(state = initialState, action) {
    switch (action.type) {
      case SET_DATA:
        return {
          ...state,
          data: action.payload,
        };
        case SET_LOADER:
          return {
            ...state,
            loading: action.payload,
          };
       
      default:
        return state;
    }
  }