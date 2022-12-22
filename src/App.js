import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Employees } from './pages';
import { Layout } from './components'
import { Provider } from "./hooks/createContext";

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
