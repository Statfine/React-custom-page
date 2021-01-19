import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.customPage || initialState;

export const selectCustomPage = createSelector(
  [selectDomain],
  customPageState => customPageState,
);
