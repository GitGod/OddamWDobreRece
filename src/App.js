import logo from './logo.svg';
import './scss/main.scss';
import Home from "./components/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
      <HashRouter>
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/logowanie" component={LoginPage} />
            <Route path="/rejestracja" component={RegisterPage} />
        </Routes>
      </HashRouter>

  );
}

export default App;
