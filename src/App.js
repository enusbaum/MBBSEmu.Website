import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Modules from "./pages/Modules"
import Connect from "./pages/Connect"

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/modules" element={<Modules/>} />
          <Route exact path="/connect" element={<Connect/>} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
