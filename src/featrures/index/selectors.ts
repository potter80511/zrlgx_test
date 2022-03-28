import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../../store";

export const indexSelector = (state: StoreState) => state.index;

export const postListStateSelector = createSelector(
  indexSelector, 
  (index) => index.postListState
);

export const postListSelector = createSelector(
  postListStateSelector, 
  (postListState) => postListState.list
);

export const postListLoadingSelector = createSelector(
  postListStateSelector, 
  (postListState) => postListState.loading
);
