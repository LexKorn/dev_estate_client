import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CalcStore from './store/CalcStore';

import './styles/style.sass';

type RootStateContextValue = {
  calc: CalcStore;
}

export const Context = createContext<RootStateContextValue>({} as RootStateContextValue);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    calc: new CalcStore()
  }}>
    <App />
  </Context.Provider>
);