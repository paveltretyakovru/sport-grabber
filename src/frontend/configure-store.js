// Libs
import	thunk	from	'redux-thunk';
// import createLogger from 'redux-logger';
import DevTools from './app/shared/devtools';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose} from 'redux';

// Reducers
import rootReducer from './reducers';

// Init variables 
const router = routerMiddleware(hashHistory);
// const logger = createLogger();

let middlewares = (NODE_ENV === 'development')
  ? applyMiddleware(thunk, router)
  // ? applyMiddleware(logger, thunk, router)
  : applyMiddleware(thunk, router);

let enhancer = (NODE_ENV === 'development')
  ? compose(middlewares, DevTools.instrument())
  : compose(middlewares);

export function configureStore() {

  // Add the reducer to your store on the `routing` key
  const Store = createStore(
    rootReducer,
    enhancer
  );

  if	(module.hot)	{
    module.hot.accept('./reducers',	()	=>	{
      const	nextRootReducer	=	require('./reducers').default;
      Store.replaceReducer(nextRootReducer);
    });
  }

  return Store
}
