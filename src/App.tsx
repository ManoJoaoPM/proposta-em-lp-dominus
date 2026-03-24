import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/imobiliaria-inglaterra" replace />} />
        <Route path="/imobiliaria-inglaterra" element={<Home />} />
      </Routes>
    </Router>
  );
}
