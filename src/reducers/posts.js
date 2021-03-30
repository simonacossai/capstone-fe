export default function (state = {}, action) {
    switch (action.type) {
        case "STORE_ALL_POSTS":
            return {
              ...state,
              allPosts: action.payload,
            };
      case "CLEAN_STORE":
        return{
          ...state,
          allPosts: []
        };
      default:
        return state;
    }
  }