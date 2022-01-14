
import '../styling/leagues.css'
import Card from './card'

 const Competitions = ({competitions}) => {

    fetch(`http://api.football-data.org/v2/competitions/`, {
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
            console.log({err});
        });

    return (
        <div style={{fontFamily: 'Poppins,sans-serif'}}>
            <div className='leagues-container'>
            <span style={{fontSize: '30px', color: '#888'}}>All Competitions</span>
            {competitions.map(({ AREAS, PLAN }) => (
				<Card areas={AREAS} plan={PLAN}/>
            ))}
            </div>
        </div>
    )
}
export default Competitions;
