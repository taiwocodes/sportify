import { useState, useEffect, useContext, useRef} from 'react';
import { useParams} from 'react-router-dom';
import { AppContext } from './appstate';

export default function Standings({ key }) {
	const [standings, setStandings] = useState([]);
	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

	const { state: { competitions } } = useContext(AppContext);

    const params = useParams();

    const currentStandingsView = useRef(competitions.find(competition => competition.id === parseInt(params.competitionId)),
	);

	useEffect(() => {
		const abortController = new AbortController();

		fetch(`http://api.football-data.org/v2/competitions/${currentStandingsView.current.id}/standings?standingType=TOTAL`, {
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
			setStandings(result.filter.standings);
			setError(null);
		}).catch((err) => {
			setError(err.message);
			setIsLoaded(false);
		});

		return () => abortController.abort();
	}, [currentStandingsView.current.id]);

	return (
		<div>
            { isLoaded && <div>Loading...</div> }
			{ error && <div>{ error }</div> }
			{ standings && (
				<div>
					<table>
						<thead>
							<tr>
								<th>Position</th>
								<th>Team</th>
								<th>MP</th>
								<th>W</th>
								<th>D</th>
								<th>L</th>
								<th>GF</th>
								<th>GA</th>
								<th>Pts</th>
							</tr>
						</thead>
						{standings.map((standing) => (
							<tbody>
								<tr>
									<td>{standing.table.position}</td>
									<td>
										<span>{standing.table.team.crestUrl}</span>
										<span> {standing.table.team.name} </span>
									</td>
									<td>{standing.table.playedGames}</td>
									<td>{standing.table.won}</td>
									<td>{standing.table.draw}</td>
									<td>{standing.table.lost}</td>
									<td>{standing.table.goalsFor}</td>
									<td>{standing.table.goalsAgainst}</td>
									<td>{standing.table.points}</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			)}
		</div>
	);
}
