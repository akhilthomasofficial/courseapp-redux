// store/configureStore.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Import redux-thunk
import courseReducer from '../reducers/courseReducer';
import enquiryReducer from '../reducers/enquiryReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  enquiries: enquiryReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
