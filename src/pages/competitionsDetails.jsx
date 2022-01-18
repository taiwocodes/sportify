import { useState } from "react";
import '../styling/leagues.css';

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
                        <h1>This is the standings tab.</h1>
                    </div>
                </section>
            }
            {currentlyViewing === "matches" &&
                <section>
                    <div className="matches">
                        <h1>
                            This is the matches tab.
                        </h1>
                    </div>
                </section>
            }
        </>
    );
}
 
export default CompetitionDetails;