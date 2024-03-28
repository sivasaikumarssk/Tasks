import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Mainpage from "./Pages/Mainpage";
import CertificateMain from "./Pages/CertificateMain";
import Certificate from "./Pages/Certificate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="homepage" element={<CertificateMain />} />
        <Route path="/certificate/:name/:course" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
