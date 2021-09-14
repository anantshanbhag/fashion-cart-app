import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

/**
 * Select sections from directory.
 * @returns `sections` from directory state.
 * @createdOn 12-Aug-2021
 */
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);