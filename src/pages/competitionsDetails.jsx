import { useState, useEffect, useContext, useRef} from 'react';
import { useParams } from "react-router-dom";
import '../styling/leagues.css';
import Standings from "../components/standings";
// import Matches from "../components/matches";
import { AppContext } from "../components/appstate";


const CompetitionDetails = () => {
    const [currentlyViewing, setCurrentlyViewing] = useState('standings');
    const [standings, setStandings] = useState([]);
	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

	const { state: { competitions } } = useContext(AppContext);

    const params = useParams();

    const currentStandingsView = useRef(competitions.find(competition => competition.id === parseInt(params.competitionId)),
	);
    const standingId = currentStandingsView.current.id;
    // console.log(id);

    useEffect(() => {
		const abortController = new AbortController();

		fetch(`http://api.football-data.org/v2/competitions/${standingId}/standings?standingType=TOTAL`, {
			headers: { 'X-Auth-Token': '05c269e55b8645d7a548b1f608b5fa4c' },
			method: 'GET',
		}, {signal: abortController.signal})
		.then(res => {
			// console.log(res);
			if (!res.ok) {
				throw new Error ("Could not fetch data for the resource");
			}
			return res.json();
		})
		.then((result) => {
			console.log(result);
			setIsLoaded(false);
			setStandings(result.standings);
			setError(null);
		}).catch((err) => {
			setError(err.message);
			// console.log(err);
			setIsLoaded(false);
		});

		return () => abortController.abort();
	}, [standingId]);


    const viewSection = (section) => {
		setCurrentlyViewing(section);
	}

    return (
        <>
            <div className="competition-tables">
                <ul className="switch-tab">
                    <li onClick={()=> viewSection("standings")} activeclassname="active">Standings</li>
                    <li onClick={()=> viewSection("matches")} activeclassname="active">Matches</li>
                </ul>
            </div>
            {currentlyViewing === "standings" &&
                <section>
                    <div className="standings">
                        {/* <p>This is the standings component.</p> */}
                        {standings.map(standing => (
                                <Standings key={standing.competitionId} standing={standing} error={error} isLoaded={isLoaded} />
                        ))}
                    </div>
                </section>
            }
            {currentlyViewing === "matches" &&
                <section>
                    <div className="matches">
                    <p>Hi, this is the match component.</p>
                    {/* {matches.map(({ id, matchDay }) => (
                                <Matches key={id} matchDay={}/>
                    ))} */}
                    </div>
                </section>
            }
        </>
    );
}
 
export default CompetitionDetails;