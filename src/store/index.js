import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer from '../reducers/user'
import postsReducer from '../reducers/posts'
import loadingReducer from '../reducers/loading';
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  user: {
      data:[],
      changed: false,
  },
  posts:{
    allPosts:[],
  },
  loading:{
    loader: false,
  }
};

const bigReducer = combineReducers({user: userReducer, posts: postsReducer, loading: loadingReducer })

export default function configureStore() {
  return createStore(bigReducer, initialState, composedEnhancer(applyMiddleware(thunk)))
}
