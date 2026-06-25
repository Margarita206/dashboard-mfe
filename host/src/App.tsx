import React, {useEffect} from 'react'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthMfe from "./mfes/AuthMfe";


const App = () => {


    return (
        <Router>
            <Routes>
                <Route path={'/dashboard'} element={<AuthMfe/>}/>
            </Routes>

        </Router>
        )

}
export default App