import { combineReducers } from "redux";
import { minData} from "./Reducer";

const reducers = combineReducers({
  minData: minData,
});

export default reducers;
