import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Sermons from "./pages/Sermons";
import Giving from "./pages/Giving";
import KingdomCinema from "./pages/KingdomCinema";
import Connect from "./pages/Connect";
import Events from "./pages/Events";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="giving" element={<Giving />} />
          <Route path="kingdom-cinema" element={<KingdomCinema />} />
          <Route path="connect" element={<Connect />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
