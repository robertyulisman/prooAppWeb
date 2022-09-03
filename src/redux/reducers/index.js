import { combineReducers } from "redux";
import landingPageReducer from "./landingPageReducer";
import paketReducer from "./paketReducer";
import pelajaranReducer from "./pelajaranReducer";

export default combineReducers({
  paket: paketReducer,
  pelajaran: pelajaranReducer,
  landingPage: landingPageReducer,
});
