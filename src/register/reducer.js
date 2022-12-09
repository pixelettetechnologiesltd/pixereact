const initialState = {};
const Register = (state = initialState, { type, payload }) => {
  switch (type) {
    case "REGISTER_USER":
      return {
        state: { ...state, payload },
      };
    default:
      return {
        ...state,
      };
      break;
  }
};

export default Register;
