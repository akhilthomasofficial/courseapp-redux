import { ADD_ENQUIRY_SUCCESS } from '../actions/enquiryActions';

export default function enquiryReducer(state = [], action) {
  switch (action.type) {
    case ADD_ENQUIRY_SUCCESS:
      return [...state, action.enquiry];
    default:
      return state;
  }
}
