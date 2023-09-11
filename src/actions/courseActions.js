export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';

export function fetchCoursesSuccess(courses) {
  return {
    type: FETCH_COURSES_SUCCESS,
    courses,
  };
}
