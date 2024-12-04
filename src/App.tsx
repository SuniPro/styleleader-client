import React from "react";
import "./App.css";
import { Header } from "./components/layouts";
import { StyleLeaderDisplay } from "./pages/StyleLeaderDisplay";
import Footer from "./components/layouts/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Company } from "./pages/Company";
import { Brand } from "./pages/Brand";
import { BoardDetail } from "./pages/BoardDetail";
import { Board } from "./components/Board/Board";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import emotionTheme from "./styles/theme";
import { PageContainer } from "./components/layouts";
import { ReadyBanner } from "./components/empty/ReadyBanner";
import theme from "./styles/theme";
import { ParallaxProvider } from "react-scroll-parallax";
import { Service } from "./pages/Service";
import { Sign } from "./pages/Sign";
import "sweetalert2/src/sweetalert2.scss";
import { Management } from "./pages/Management";
import { BrandCatalog } from "./components/management/display/BrandCatalog";
import { DisplayCollection } from "./components/management/display/DisplayCollection";
import { BrandCollection } from "./components/management/BrandCollection";
import { Manual, QuestionAndAnswer } from "./components/management/service";
import { Faq } from "./pages/faq";
import { ServiceRequest } from "./components/management/service/ServiceRequest";
import { Introduce } from "./components/company/Introduce";
import { UserContextProvider } from "./components/context/UserContext";
import { ComputationManagement } from "./components/management/ComputationManagement";

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
          <UserContextProvider>
            <div className="App">
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<StyleLeaderDisplay />} />
                  <Route
                    path="/description"
                    element={<ComputationManagement />}
                  />
                  <Route path="company" element={<Company />}>
                    <Route path="info" element={<Introduce />} />
                    <Route path="board" element={<Board />} />
                    <Route path="board/:boardId" element={<BoardDetail />} />
                  </Route>
                  <Route path="/brand" element={<Brand />} />
                  <Route path="service">
                    <Route path="" element={<Service />} />
                    <Route path="faq" element={<Faq />} />
                  </Route>
                  <Route path="/sign" element={<Sign />} />
                  <Route path="manage" element={<Management />}>
                    <Route path="catalog" element={<BrandCatalog />} />
                    <Route path="showcase" element={<DisplayCollection />} />
                    <Route path="collection" element={<BrandCollection />} />
                    <Route path="manual" element={<Manual />} />
                    <Route path="questions" element={<QuestionAndAnswer />} />
                    <Route path="request" element={<ServiceRequest />} />
                  </Route>
                </Routes>
              </BrowserRouter>
              <Footer />
            </div>
          </UserContextProvider>
        </ParallaxProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
