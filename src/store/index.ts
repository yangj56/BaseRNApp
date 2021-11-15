/* eslint-disable @typescript-eslint/no-var-requires */
// import {RootState} from '../reducers';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {coinStoreReducer} from '../reducers/coinStoreSlice';

// import {coinMarketReducer} from '../reducers/coinStoreOldRedux';

// export const createReducer = () => {
//   return combineReducers<RootState>({
//     coinMarket: coinMarketReducer,
//   });
// };
// export type AppDispatch = typeof store.dispatch;
// export const oldStore = createStore(
//   createReducer(),
//   {},
//   applyMiddleware(thunk),
// );

// new store
const middlewares = [];

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const rootReducer = combineReducers({
  coinStore: coinStoreReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      return getDefaultMiddleware().concat(require('redux-flipper').default());
    }
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
