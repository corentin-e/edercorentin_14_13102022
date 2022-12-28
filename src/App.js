import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./hooks/createContext";
import React from 'react';


const Layout = React.lazy(() => import('./components/Layout/Layout'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Employees = React.lazy(() => import('./pages/Employees/Employees'));


function App() {
    return (
        <div>
            <BrowserRouter>
                <Provider>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="employees" element={<Employees />}/>
                        </Routes>
                    </Layout>
                </Provider>
            </BrowserRouter>

        </div>
    );
}

export default App;
