import axios from "axios";

export const getProfiles = (keyword) => async (dispatch) => {
  await axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then((response) =>
      dispatch({ type: "GET_PROFILE_SUCCESS", payload: response.data.items })
    )
    .catch((error) => dispatch({ type: "GET_PROFILE_ERROR", payload: error }));
};
