import React, {lazy} from 'react'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const Dashboard = lazy(() => import("./mfes/Dashboard.tsx"));
const Faq = lazy(()=> import("./mfes/Faq.tsx"))
const Team = lazy(() => import('./mfes/Team.tsx'));
const Contacts = lazy(() => import('./mfes/Contacts.tsx'));

const App = () => {


    return (
        <section>
            <Routes>
                <Route index element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Dashboard/>
                    </React.Suspense>
                }/>
                <Route path="faq" element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Faq />
                    </React.Suspense>
                } />

                <Route path="team" element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Team />
                    </React.Suspense>
                } />

                <Route path="contacts" element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Contacts />
                    </React.Suspense>
                } />

                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>



        </section>

    )

}
export default App