import { useContext } from 'react';
import { AppContext } from './appstate';
import '../styling/leagues.css'
import Card from './card'

 const Competitions = () => {
    const context = useContext(AppContext);
    

    return (
        <div style={{fontFamily: 'Poppins,sans-serif'}} className='container'>
            <span style={{fontSize: '30px', color: '#333'}}>All Competitions</span>
            <div className='leagues-container'>
                {context.state.competitions.map(competition => (
                    <Card key={competition.id} competition={competition} />
                ))}
            </div>
        </div>
    )
}
export default Competitions;
