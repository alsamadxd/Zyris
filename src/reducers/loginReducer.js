export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };

    case "PASSWORD":
      return { ...state, password: payload };

    case "TOKEN":
      return { ...state, token: payload.token };

    case "LOGOUT":
      return { ...state, email: "", password: "", token: "" };

    default:
      return state;
  }
};
