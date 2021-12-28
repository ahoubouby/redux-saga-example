import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSageMiddleware from 'redux-saga';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(preloadedState) {
    const sagaMiddleware = createSageMiddleware();
    const middlewares = [loggerMiddleware, sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);


    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);
    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
    }

    return store;
}