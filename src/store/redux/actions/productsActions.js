import { ActionTypes } from "../constants/action-types";

export const Toggle = (T) => {
  return {
    type: ActionTypes.SET_MYDATA,
    payload: T,
  };
};

