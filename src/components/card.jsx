import { Link } from 'react-router-dom';
import '../styling/card.css';

const Card = ({ competition }) => {
	
	return (
		<Link to={`/competitions/${competition.id}`}>
			<div className='card'>
				<img src={competition.area.ensignUrl} alt='logo' className='logo-image'/>
				<div className='card-right'>
					<h4 className='league-title'>{ competition.name }</h4>
					<span className='location'>{ competition.area.name }</span>
				</div>
			</div>
		</Link>
	);
};
export default Card;
































// const navigate = useNavigate();

// 	function viewMatches() {
// 		fetch(`https://api.football-data.orgv2/competitions/{id}/matches`, {
//             headers: { 'X-Auth-Token': '05c269e55b8645d7a548b1f608b5fa4c' },
//             method: 'GET',
//             mode: 'no-cors',
// 		})
// 			.then((res) => res.json())
// 			.then((result) => {
// 				console.log(result);
// 				// if (result.status === 200) {
// 				// 	return result.json()
// 				// }else {
// 				// throw new Error();
// 				// }

// 				navigate('/matches');

// 			})
// 			.catch((err) => {
// 				alert('Unable to complete request. Please try again after some time');
// 				console.log({ err });
// 			});
// 	};
