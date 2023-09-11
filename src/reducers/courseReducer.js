// reducers/courseReducer.js
import { FETCH_COURSES_SUCCESS } from '../actions/courseActions';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
