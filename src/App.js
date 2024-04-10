import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Mainpage from "./Pages/Mainpage";
import CertificateMain from "./Pages/CertificateMain";
import Certificate from "./Pages/Certificate";
import SalaryDetail from "./Pages/SalaryDetail";
import Session from "./Pages/Session";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/certificate/:name/:course" element={<Certificate />} />
        <Route path="/certificate" element={<CertificateMain />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/salary" element={<SalaryDetail />} />
        <Route path="/session" element={<Session />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
