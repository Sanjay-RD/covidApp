import {
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
  COUNTRY_LIST_FAIL,
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
