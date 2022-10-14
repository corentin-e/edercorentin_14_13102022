import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Employees } from './pages/index';
import { Layout } from './components'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Layout>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="employees" element={<Employees />}/>
              </Routes>
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
