import { createSelector } from "reselect";

const selectDirectory = state  => state.directory
//directory from root reducer
export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.sections
)