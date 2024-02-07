import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CalcStore from './store/CalcStore';
import BaseStore from './store/BaseStore';
import LikeStore from './store/LikeStore';

import './styles/style.sass';

type RootStateContextValue = {
  calc: CalcStore;
  base: BaseStore;
  like: LikeStore;
}

export const Context = createContext<RootStateContextValue>({} as RootStateContextValue);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    calc: new CalcStore(),
    base: new BaseStore(),
    like: new LikeStore()
  }}>
    <App />
  </Context.Provider>
);