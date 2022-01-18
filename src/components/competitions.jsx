import { useContext } from 'react';
import { AppContext } from './stateprovider';
import '../styling/leagues.css'
import Card from './card'

 const Competitions = () => {
    const context = useContext(AppContext);
    

    return (
        <div style={{fontFamily: 'Poppins,sans-serif'}}>
            <div className='leagues-container'>
            <span style={{fontSize: '30px', color: '#888'}}>All Competitions</span>
            {context.state.competitions.map(({ id, area, plan }) => (
				<Card key={id} area={area.name} plan={plan} />
            ))}
            </div>
        </div>
    )
}
export default Competitions;
