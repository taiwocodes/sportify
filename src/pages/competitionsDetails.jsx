import { useState } from "react";
import '../styling/leagues.css';
import Standings from "../components/standings";
import Matches from "../components/matches";
// import { AppContext } from "../components/appstate";


const CompetitionDetails = () => {
    const [currentlyViewing, setCurrentlyViewing] = useState('standings');

    const viewSection = (section) => {
		setCurrentlyViewing(section)
	}

    
    return (
        <>
            <div className="competition-tables">
                <ul className="switch-tab">
                    <li onClick={()=> viewSection("standings")} exact activeClassname="active">Standings</li>
                    <li onClick={()=> viewSection("matches")} exact activeClassname="active">Matches</li>
                </ul>
            </div>
            {currentlyViewing === "standings" &&
                <section>
                    <div className="standings">
                {standings.map(({ id, standingType }) => (
                        <Standings key={id} standingType={standingType}/>
                ))}
                    </div>
                </section>
            }
            {currentlyViewing === "matches" &&
                <section>
                    <div className="matches">
                {matches.map(({ id, matchDay }) => (
                            <Matches key={id} matchDay={matchDay}/>
                ))}
                    </div>
                </section>
            }
        </>
    );
}
 
export default CompetitionDetails;