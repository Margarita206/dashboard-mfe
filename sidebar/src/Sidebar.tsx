import { lazy, ReactNode, useState, Suspense, FC } from "react";
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MyProSidebarProvider } from "./pages/SidebarProvider";
import Topbar from "./pages/topbar/Topbar";

const Dashboard = lazy(() => import('Dashboard/App'));
const FAQ = lazy(() => import('FAQ/App'));

interface SidebarProps {
    routes?: ReactNode;
}

// const DefaultRoutes: FC = () => (
//     <Routes>
//         <Route
//             index
//             element={
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <Dashboard />
//                 </Suspense>
//             }
//         />
//         <Route
//             path="faq"
//             element={
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <FAQ />
//                 </Suspense>
//             }
//         />
//         <Route path="*" element={<h2>Page Not Found</h2>} />
//     </Routes>
// );
const DefaultRoutes = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
    </Suspense>
);

const Sidebar: FC<SidebarProps> = ({ routes }) => {
    const [theme, colorMode] = useMode();
    const content = routes ?? <DefaultRoutes />;
    const [isToggled, setIsToggled] = useState(false);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MyProSidebarProvider>
                    <Topbar
                        onToggleSidebar={() => setIsToggled(!isToggled)}
                    />
                    {content}
                </MyProSidebarProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
};

export default Sidebar;