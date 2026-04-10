import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProvectumLP from "@/pages/ProvectumLP";
import LeadCapture from "@/pages/LeadCapture";
import OArcoLP from "@/pages/OArcoLP";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeadCapture />} />
        <Route path="/imobiliaria-inglaterra" element={<Home />} />
        <Route path="/rede-provectum" element={<ProvectumLP />} />
        <Route path="/oarco" element={<OArcoLP />} />
      </Routes>
    </Router>
  );
}
