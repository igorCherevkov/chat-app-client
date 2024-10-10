import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducers/rootReducer";
import { rootSaga } from "./saga/rootSaga";
import { CHANGE_PROFILE_REQUEST } from "./actions/usersActions";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [CHANGE_PROFILE_REQUEST],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
