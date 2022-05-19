const INITIAL_STATE = {
  profiles: [],
  message: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PROFILE_SUCCESS":
      return { ...state, profiles: action.payload };

    case "GET_PROFILE_ERROR":
      return { ...state, message: action.payload };

    default:
      return state;
  }
};
