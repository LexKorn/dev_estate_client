import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CalcStore from './store/CalcStore';
import BaseStore from './store/BaseStore';

import './styles/style.sass';

type RootStateContextValue = {
  calc: CalcStore;
  base: BaseStore
}

export const Context = createContext<RootStateContextValue>({} as RootStateContextValue);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    calc: new CalcStore(),
    base: new BaseStore()
  }}>
    <App />
  </Context.Provider>
);