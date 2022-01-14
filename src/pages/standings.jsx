import React from 'react'

export default function Standings() {
    fetch(`http://api.football-data.org/v2/competitions/{id}/standings`, {
        headers: { 'X-Auth-Token': '05c269e55b8645d7a548b1f608b5fa4c' },
        method: 'GET',
        mode: 'no-cors',
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            alert('Unable to complete request. Please try again after some time');
            console.log({ err });
        });
    return (
        <div>
            standings.
            <table>
  <tr>
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
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
  </tr>
  </table>
        </div>
    )
}
