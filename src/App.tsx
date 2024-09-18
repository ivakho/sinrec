import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/HomePage/HomePage";
import CirclePage from "./pages/CirclePage/CirclePage";

const App = () => {
  return (
    <Router basename="/sinrec">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/circle/:id" element={<CirclePage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
