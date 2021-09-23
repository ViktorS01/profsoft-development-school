import {combineReducers} from '@reduxjs/toolkit';
import {authReducer as auth} from "./reducers";
import {certificateReducer as certificate} from "./reducers";
import {cardReducer as card} from "./reducers";

export const rootReducer = combineReducers({auth, certificate, card});

export type RootState = ReturnType<typeof rootReducer>;