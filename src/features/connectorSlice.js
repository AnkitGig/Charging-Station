// src/feature/connectorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedConnector: null,
  connectors: [
    {
      type: 'JT772',
      price: '0.44',
      slot: 'Slot 1: AC: 44.4 kWh',
      sessionFee: '0.98',
      parkingFee: '1.05',
      available: true,
    },
    {
      type: 'CCS2',
      price: '0.44',
      slot: 'Slot 2: DC: 44.4 kWh',
      sessionFee: '0.98',
      parkingFee: '1.25',
      available: false,
    },
  ],
};

export const connectorSlice = createSlice({
  name: 'connector',
  initialState,
  reducers: {
    selectConnector: (state, action) => {
      state.selectedConnector = action.payload;
    },
  },
});

export const { selectConnector } = connectorSlice.actions;
export default connectorSlice.reducer;
