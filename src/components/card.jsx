import { useNavigate } from 'react-router-dom';
import '../styling/card.css';

const Card = ({competitions}) => {
	const navigate = useNavigate();

	function viewMatches() {
		fetch(`https://api.football-data.orgv2/competitions/{id}/matches`, {
            headers: { 'X-Auth-Token': '05c269e55b8645d7a548b1f608b5fa4c' },
            method: 'GET',
            mode: 'no-cors',
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);

				navigate('/matches');

			})
			.catch((err) => {
				alert('Unable to complete request. Please try again after some time');
				console.log({ err });
			});
	};
	return (
			<div className='card' onClick={viewMatches}>
				<img src='' alt='logo' />
				<h4 className='league-title'>{competitions.AREAS}</h4>
				<span className='location'>{competitions.PLAN}</span>
			</div>
	);
};
export default Card;
