// redux 入口
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers<State.RootState>({

});

function configureStore(initState = {}) {
  const composeFn = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeFn(applyMiddleware(thunk));
  return createStore(rootReducer, initState, enhancers);
}

const store = configureStore();

const dispatch = store.dispatch;
export {dispatch};
export default store;
