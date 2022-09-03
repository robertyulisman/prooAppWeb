import axios from "axios";
import { baseUrl } from "../../service/api";
import { GET_PELAJARAN } from "./types";

export const getPelajaran = () => (dispatch) => {
  axios
    .get(`${baseUrl}/api/pelajaran`)
    .then((res) => {
      console.log("Success Pelajaran :", res.data);
      dispatch({
        type: GET_PELAJARAN,
        payload: res.data,
      });
    })
    .catch((err) => console.log("Error Pelajaran :", err));
};
