import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer); // createStore precisa de um reducer, no caso o carrinho de compras

export default store;
