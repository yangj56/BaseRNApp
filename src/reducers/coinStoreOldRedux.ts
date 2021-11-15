import {MARKET} from '../typing';

export interface CoinStoreState {
  market: MARKET;
}

const initialState: CoinStoreState = {
  market: MARKET.COINBASE,
};

export enum ActionType {
  UPDATE_MARKET = 'coin_market/update',
  RESET_MARKET = 'coin_market/reset',
}

interface ActionCoinMarketUpdate {
  type: ActionType.UPDATE_MARKET;
  payload: MARKET;
}

interface ActionCoinMarketReset {
  type: ActionType.RESET_MARKET;
  payload: boolean;
}

export type CoinMarketAction = ActionCoinMarketUpdate | ActionCoinMarketReset;

export const updateMarket = (market: MARKET): ActionCoinMarketUpdate => {
  return {
    type: ActionType.UPDATE_MARKET,
    payload: market,
  };
};

export const resetMarket = (reset: boolean): ActionCoinMarketReset => {
  return {
    type: ActionType.RESET_MARKET,
    payload: reset,
  };
};

export const coinMarketReducer = (
  state = initialState,
  action: CoinMarketAction,
): CoinStoreState => {
  switch (action.type) {
    case ActionType.RESET_MARKET:
      if (action.payload) {
        return {
          ...state,
          market: MARKET.COINBASE,
        };
      } else {
        return {
          ...state,
        };
      }
    case ActionType.UPDATE_MARKET:
      return {
        ...state,
        market: action.payload,
      };
    default:
      return {
        ...state,
        market: MARKET.COINBASE,
      };
  }
};
