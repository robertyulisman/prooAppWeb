import { GET_LANDING_PAGE, GET_PROO } from "../actions/types";

const initialState = {
  data: [],
  proo: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LANDING_PAGE:
      return {
        ...state,
        data: action.payload,
      };
    case GET_PROO:
      return {
        ...state,
        proo: action.payload,
      };
    default:
      return state;
  }
}
