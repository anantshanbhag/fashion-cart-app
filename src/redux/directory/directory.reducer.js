import SECTIONS_DATA from "./sections.data";

const INITIAL_STATE = {
  sections: SECTIONS_DATA
}

/** @createdOn 5-Sep-2021 */
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;