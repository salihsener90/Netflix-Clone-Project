import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/mainPage";
import Header from "./components/Header";




const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/movie/:movie_id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
