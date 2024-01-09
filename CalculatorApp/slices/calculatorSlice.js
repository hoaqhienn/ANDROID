import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    multiply: (state, action) => {
      state.result *= action.payload;
    },
    divide: (state, action) => {
      state.result /= action.payload;
    },
  },
});

export const { add, subtract, multiply, divide } = calculatorSlice.actions;
export const selectResult = (state) => state.calculator.result;
export default calculatorSlice.reducer;
