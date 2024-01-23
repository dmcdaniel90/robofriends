import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { render } from '@testing-library/react';
import { thunk } from 'redux-thunk';
import { searchRobots, requestRobots } from '../reducers';

const rootReducer = combineReducers({ searchRobots, requestRobots })

const AllProviders = ({ children }) => {
  return (
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      {children}
    </Provider>
  );
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };


