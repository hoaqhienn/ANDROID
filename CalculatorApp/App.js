import React from 'react';
import { Provider } from 'react-redux';
import store from './slices/store';
import CalculatorScreen from './screens/CalculatorScreen';

export default function App() {
  return (
    <Provider store={store}>
      <CalculatorScreen />
    </Provider>
  );
}
