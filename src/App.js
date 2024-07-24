import logo from './logo.svg';
import './scss/main.scss';
import Home from "./components/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Layout from "./components/Layout";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/logowanie" element={<LoginPage/>}/>
                    <Route path="/rejestracja" element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </HashRouter>

    );
}

export default App;
