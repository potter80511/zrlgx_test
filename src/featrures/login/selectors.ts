import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../../store";

export const userSelector = (state: StoreState) => state.user;

export const userInfoSelector = createSelector(
  userSelector, 
  ({userInfo}) => userInfo
);

