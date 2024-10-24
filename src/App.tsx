import React from "react";
import "./App.css";
import { Header } from "./components/layouts/Header";
import { StyleLeaderDisplay } from "./pages/StyleLeaderDisplay";
import Footer from "./components/layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Company } from "./pages/Company";
import { Brand } from "./pages/Brand";
import { Service } from "./pages/Service";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<StyleLeaderDisplay />} />
            <Route path={"/company"} element={<Company />} />
            <Route path={"/brand"} element={<Brand />} />
            <Route path={"/service"} element={<Service />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
