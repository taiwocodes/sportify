// import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";

// const Matches = () => {
//     const { id } = useParams();
//     const [error, setError] = useState(null);
//     const [competitions, setCompetitions] = useState([]);
//     const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     fetch(`http://api.football-data.org/v2/competitions/${id}/matches?matchday=1`, {
//         headers: { 'X-Auth-Token': '05c269e55b8645d7a548b1f608b5fa4c' },
//         method: 'GET',
//         mode: 'no-cors',
//     })
//         .then((res) => res.json())
//         .then((result) => {
//             if (result.status !== 200) {
//                 console.log("An error has occured");
//             }
//             setIsLoaded(true);
//             setCompetitions(result);
//         })
//         .catch((error) => {
//             setIsLoaded(true);
//             setError(error);
//         });
//     }, [id, navigate]);

//   return (
//     <div>
//       { isLoaded && <div>Loading...</div> }
//       { error && <div>{ error }</div> }
//       { competitions && (
//         <div>
//           <h2>{ competitions.area.name }</h2>
//           <p>{ competitions.name }</p>
//           <p>{ competitions.plan }</p>
//         </div>
//       )}
//     </div>
//   );
// }
 
// export default Matches;










// // import React from 'react'

// // export default function Matches() {
// //     return (
// //         <div>
// //             matches.
// //         </div>
// //     )
// // }
