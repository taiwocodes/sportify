// import { Link } from 'react-router-dom';
import '../styling/card.css';

const Card = ({ id, area, plan }) => {
	
	return (
        
		<div className='card'>
			{/* <Link to={`/standings/${id}`}>  */}
				<img src='' alt='logo' />
				<h4 className='league-title'>{ area }</h4>
				<span className='location'>{ plan }</span>
			{/* </Link>  */}
		</div>
        
        
	);
};
export default Card;