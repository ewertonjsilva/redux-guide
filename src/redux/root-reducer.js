import { combineReducers } from 'redux'; 
// guarda todos os reducer no root 

import userReducer from './users/reducer';

const rootReducer = combineReducers({ userReducer }); 
// constante que armazena todos os reducers

export default rootReducer;

