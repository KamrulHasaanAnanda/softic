import {combineReducers} from "redux";
import staticBarReducer from "./staticBarReducer";


export default combineReducers({
  //   products: productReducer,
  staticBar: staticBarReducer,
});
