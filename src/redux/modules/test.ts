import { createSlice } from '@reduxjs/toolkit';

interface testState {
  test: string;
}

const initialState: testState = {
  test: 'No testing',
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    initialize: () => initialState,
    testSuccess: state => {
      state.test = 'Test Success';
    },
    testFail: state => {
      state.test = 'Test Fail';
    },
  },
});

export const { initialize, testSuccess, testFail } = testSlice.actions;

export default testSlice.reducer;
