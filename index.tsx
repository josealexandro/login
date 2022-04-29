import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Login from '../pages/Login';

const Routers: React.FC = () =>  (
    <Routes>
        <Route path="/" component={Login}  />
    </Routes>
)

export default Routers;




