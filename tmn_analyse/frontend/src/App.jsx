import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RoutePublique } from "./auth/RoutesProtegees";
import PageBirdnet from "./pages/Birnet";
import PageOpenbat from "./pages/Openbat";
import PageMegaDetector from "./pages/MegaDetector";
import PageAccueil from "./pages/Accueil";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          {/* Routes publiques - aucune connexion */}
          <Route element={<RoutePublique />}>
            <Route path="/" element={<PageAccueil />} />
            <Route path="/RedirPageBirdnet" element={<PageBirdnet />} />
            <Route path="/RedirPageOpenbat" element={<PageOpenbat />} />
            <Route path="/RedirPageMega" element={<PageMegaDetector />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;