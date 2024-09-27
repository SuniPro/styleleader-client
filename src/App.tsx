import React from "react";
import "./App.css";
import { Header } from "./components/layouts/Header";
import { StyleLeaderDisplay } from "./pages/StyleLeaderDisplay";
import Footer from "./components/layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Company } from "./pages/Company";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StyleLeaderDisplay />} />
          <Route path={"/company"} element={<Company />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
