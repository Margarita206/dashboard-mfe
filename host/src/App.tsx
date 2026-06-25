import React, {lazy} from 'react'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const Dashboard = lazy(() => import("./mfes/Dashboard.tsx"));

const App = () => {


    return (
        <section>
            <Routes>
                <Route index element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Dashboard/>
                    </React.Suspense>
                }/>

                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>



        </section>

    )

}
export default App