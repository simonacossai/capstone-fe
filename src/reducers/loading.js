export default function (state = {}, action) {
    switch (action.type) {
        case "SET_LOADING":
            return {
              ...state,
              loader: action.payload
            };
      default:
        return state;
    }
  }