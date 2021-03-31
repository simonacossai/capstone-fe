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
      case "CHANGED": 
        return{
          ...state,
          changed: !state.changed
        }
      default:
        return state;
    }
  }