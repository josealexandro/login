import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Login from '../pages/Login';

const Routes: React.FC = () =>  (
    <Switch>
        <Route path="/" element={Login}  />
    </Switch>
)

export default Routes;




