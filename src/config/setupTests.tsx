// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer, AppState } from '../reducers';
import registerIcons from './registerIcons';

registerIcons();

export const initialTestingAppState: AppState = {
  todos: [{ id: 'test', text: 'Test todo app', completed: false }],
};

type WithReduxConfig = {
  initialState?: AppState;
  store?: Store;
};

interface RenderWithReduxResult extends RenderResult {
  store: Store<AppState>;
}

export const renderWithRedux = (
  ui: React.ReactElement,
  {
    initialState = initialTestingAppState,
    store = createStore(rootReducer, initialState),
  }: WithReduxConfig = {}
): RenderWithReduxResult => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
