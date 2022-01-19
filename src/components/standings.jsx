import { useState, useEffect, useContext} from 'react';
// import { useParams} from 'react-router-dom';
import { AppContext } from './appstate';

export default function Standings({ }) {
	// const { id } = useParams();
	const [standings, setStandings] = useState([]);
	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const context = useContext(AppContext);

	// const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://api.football-data.org/v2/competitions/{context.state.competitions.id}/standings?standingType=TOTAL`, {
			headers: { 'X-Auth-Token': '05c269e55b8645d7a548b1f608b5fa4c' },
			method: 'GET',
			mode: 'no-cors',
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.status !== 200) {
					console.log('An error has occured');
				}
                setIsLoaded(true);
				setStandings(result);
				// navigate('/standings');
			})
			.catch((error) => {
            setIsLoaded(true);
				setError(error);
			});
	}, [context.state.competitions.id]);
	return (
		<div>
             { isLoaded && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { standings && (
          <div>
			<table>
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
				<tr>
					<td>{standings.table.position}</td>
					<td>
						<span>{standings.table.team.crestUrl}</span>
						<span> {standings.table.team.name} </span>
					</td>
					<td>{standings.table.playedGames}</td>
					<td>{standings.table.won}</td>
					<td>{standings.table.draw}</td>
					<td>{standings.table.lost}</td>
					<td>{standings.table.goalsFor}</td>
					<td>{standings.table.goalsAgainst}</td>
					<td>{standings.table.points}</td>
				</tr>
			</table>
        </div>
      )}
		</div>
	);
}
