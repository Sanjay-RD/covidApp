import {
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
  COUNTRY_LIST_FAIL,
} from "../constants/covidConstants";
import axios from "axios";

export const listCountry = () => async (dispatch) => {
  try {
    dispatch({ type: COUNTRY_LIST_REQUEST });
    const { data } = await axios.get(
      `https://disease.sh/v3/covid-19/countries`
    );
    dispatch({
      type: COUNTRY_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COUNTRY_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
