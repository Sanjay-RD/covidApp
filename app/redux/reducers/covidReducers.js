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

export const countryListReducer = (state = { countries: [] }, action) => {
  switch (action.type) {
    case COUNTRY_LIST_REQUEST:
      return {
        loading: true,
        countries: [],
      };
    case COUNTRY_LIST_SUCCESS:
      return {
        loading: false,
        countries: action.payload,
      };
    case COUNTRY_LIST_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const countryDataReducer = (state = { country: [] }, action) => {
  switch (action.type) {
    case COUNTRY_DATA_REQUEST:
      return {
        loading: true,
        country: [],
      };
    case COUNTRY_DATA_SUCCESS:
      return {
        loading: false,
        country: action.payload,
      };
    case COUNTRY_DATA_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
