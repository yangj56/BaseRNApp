import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MARKET} from '../typing';

interface CoinStoreState {
  market: MARKET;
}

const initialState: CoinStoreState = {
  market: MARKET.COINBASE,
};

export const coinStoreSlice = createSlice({
  name: 'coinStore',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<MARKET>) => {
      state.market = action.payload;
    },
    reset: state => {
      state.market = MARKET.COINBASE;
    },
  },
});

export const {reset, update} = coinStoreSlice.actions;

export const coinStoreReducer = coinStoreSlice.reducer;
