// ARQUIVO PARA COMBINAR VÁRIOS REDUCERS EM UM
import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});
