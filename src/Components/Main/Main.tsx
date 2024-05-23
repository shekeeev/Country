import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Detailview from '../../Pages/Detailview/Detailview';

const Main: FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detailview/:name' element={<Detailview />} />
            </Routes>
        </div>
    );
};

export default Main;