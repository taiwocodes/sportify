// import { useState, useEffect, useContext, useRef} from 'react';
// import { useParams} from 'react-router-dom';
// import { AppContext } from './appstate';

export default function Standings({ standing, error, isLoaded }) {

	return (
		<div>
            { isLoaded && <div>Loading...</div> }
			{ error && <div>{ error }</div> }
			{ standing && (
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
						<tbody>
							<tr>
								<td>{standing.table.position}</td>
								<td>
									{/* <span>{standing.table.team.crestUrl}</span> */}
									{/* <span> {standing.table.team.name} </span> */}
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
					</table>
				</div>
			)}
		</div>
	);
}
