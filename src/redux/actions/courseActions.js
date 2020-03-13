import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import * as authorApi from "../../api/authorApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getCourses()
      .then(courses => dispatch(loadCourseSuccess(courses)))
      .catch(err => {
        throw err;
      });
  };
}
