import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Matches from "./pages/matches";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matches" element={<Matches />} />

      </Routes>
    </div>
  );
}

export default App;
