export const ADD_ENQUIRY_SUCCESS = 'ADD_ENQUIRY_SUCCESS';

export function addEnquirySuccess(enquiry) {
  return {
    type: ADD_ENQUIRY_SUCCESS,
    enquiry,
  };
}
