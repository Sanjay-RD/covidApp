import {
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
  COUNTRY_LIST_FAIL,
  COUNTRY_DATA_REQUEST,
  COUNTRY_DATA_SUCCESS,
  COUNTRY_DATA_FAIL,
  WORLDWIDE_REQUEST,
  WORLDWIDE_SUCCESS,
  WORLDWIDE_FAIL,
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

export const getCountryData = (countryCode) => async (dispatch) => {
  try {
    dispatch({ type: COUNTRY_DATA_REQUEST });
    const { data } = await axios.get(
      countryCode === "worldwide"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`
    );
    dispatch({
      type: COUNTRY_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: COUNTRY_DATA_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
