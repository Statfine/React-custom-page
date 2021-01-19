import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the CustomPage container
export const initialState: ContainerState = {};

const customPageSlice = createSlice({
  name: 'customPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: customPageActions,
  reducer,
  name: sliceKey,
} = customPageSlice;
