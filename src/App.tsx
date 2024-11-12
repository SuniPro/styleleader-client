import React from "react";
import "./App.css";
import { Header } from "./components/layouts/Header";
import { StyleLeaderDisplay } from "./pages/StyleLeaderDisplay";
import Footer from "./components/layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Company } from "./pages/Company";
import { Brand } from "./pages/Brand";
import { BoardDetail } from "./pages/BoardDetail";
import { Introduce } from "./components/Introduce";
import { Board } from "./components/Board/Board";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import emotionTheme from "./styles/theme";
import { PageContainer } from "./components/layouts";
import { ReadyBanner } from "./components/Empty/ReadyBanner";
import theme from "./styles/theme";
import { ParallaxProvider } from "react-scroll-parallax";
import { Service } from "./pages/Service";

const queryClient = new QueryClient();

function App() {
  if (!emotionTheme || null) {
    return (
      <PageContainer>
        <ReadyBanner title="서비스 준비중입니다." description="" />
      </PageContainer>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <div className="App">
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<StyleLeaderDisplay />} />
                <Route path="company" element={<Company />}>
                  <Route path="info" element={<Introduce />} />
                  <Route path="board" element={<Board />} />
                  <Route path="board/:boardId" element={<BoardDetail />} />
                </Route>
                <Route path="/brand" element={<Brand />} />
                <Route path="/service" element={<Service />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </div>
        </ParallaxProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
