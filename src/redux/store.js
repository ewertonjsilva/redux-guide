import { createStore, applyMiddleware } from 'redux'; 
// está depreciado, pois a recomendação de uso é o toolkit 
import logger from 'redux-logger';

import rootReducer from './root-reducer'; 
// local onde ficam os reducers

const store = createStore(rootReducer, applyMiddleware(logger)); 
// define armazenamento global

export default store;

