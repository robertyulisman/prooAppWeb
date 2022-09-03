import axios from "axios";
import { baseUrl } from "../../service/api";
import { GET_LANDING_PAGE, GET_PROO } from "./types";

export const getProo = () => (dispatch) => {
  axios
    .get(`${baseUrl}/api/proo`)
    .then((res) => {
      console.log("Success get data proo :", res.data);
      dispatch({
        type: GET_PROO,
        payload: res.data[0],
      });
    })
    .catch((err) => {
      console.log("Error get data proo :", err);
      alert(`Error get data proo, Error : ${err}`);
    });
};

export const getLandingPage = () => (dispatch) => {
  axios
    .get(`${baseUrl}/api/landing_page`)
    .then((res) => {
      console.log("Success get data landing page :", res.data);
      dispatch({
        type: GET_LANDING_PAGE,
        payload: res.data[0],
      });
    })
    .catch((err) => {
      console.log("Error get data landing page :", err);
      alert(`Error get data Landing Page, Error : ${err}`);
    });
};
