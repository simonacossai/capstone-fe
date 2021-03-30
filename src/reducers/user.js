export default function (state = {}, action) {
    switch (action.type) {
        case "LOGIN":
            return {
              ...state,
              data: action.payload,
            };
      case "LOGOUT":
        return{
          ...state,
          data: []
        };
      default:
        return state;
    }
  }