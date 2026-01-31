import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Accueil from "../components/Accueil";
import Projets from "../components/Projets";
import ProjectDetail from "../components/ProjectDetail";
import Contact from "../components/Contact";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projets/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />

      </Route>
    </Routes>
  );
}
