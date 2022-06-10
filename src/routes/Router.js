import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


import Home from '../pages/Home';
import Contador from '../components/Contador'

const Router = () => {
return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/presentacion/:id" element={<Contador />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>

)
}

export default Router