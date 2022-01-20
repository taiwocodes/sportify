import { Route, Routes } from "react-router-dom";
import Appstate from "./components/appstate";
import CompetitionDetails from "./pages/competitionsDetails";
import Header from "./components/header";
import Home from "./pages/home";
import Standings from "./components/standings";
// import Matches from "./components/matches";


function App() {
  return (
    
      <Appstate>
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/competitions/:competitionId" element={<Standings />} />
              <Route path="/competitionsDetails" element={<CompetitionDetails />} />
            </Routes>
        </div>
        </div>
      </Appstate>
    
  );
}

export default App;
