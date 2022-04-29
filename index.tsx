import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Login from '../pages/Login';

const Routers: React.FC = () =>  (
    <Routes>
        <Route path="/" element={<Login />}  />
    </Routes>
)

export default Routers;




