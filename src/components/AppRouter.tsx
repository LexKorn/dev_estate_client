import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {routes} from '../routes';


export default function AppRouter() {
  return (
    <Routes>
        {routes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} />
        )}
    </Routes>
  )
}
