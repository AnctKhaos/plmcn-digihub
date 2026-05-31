import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Announcements from "./pages/Announcements.jsx";
import Resources from "./pages/Resources.jsx";
import LockerSystem from "./pages/LockerSystem.jsx";
import Services from "./pages/Services.jsx";
import Concerns from "./pages/Concerns.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/locker-system" element={<LockerSystem />} />
        <Route path="/services" element={<Services />} />
        <Route path="/concerns" element={<Concerns />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
