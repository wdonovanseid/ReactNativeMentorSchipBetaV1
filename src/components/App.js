import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index-reducer';
import MainControl from './MainControl.js';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store = { store }>
      <React.Fragment>
        <MainControl />
      </React.Fragment>
    </Provider>
  );
}

export default App;
