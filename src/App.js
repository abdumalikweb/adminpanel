import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";

import Addwork from "./pages/Addwork";
import HomeP from "./pages/HomeP";
import Meneger from "./pages/Meneger";
import Order from "./pages/Order";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/meneger" element={<Meneger />} />
          <Route path="/order" element={<Order />} />
          <Route path="/addwork" element={<Addwork />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
