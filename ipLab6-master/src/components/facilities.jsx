import './facilities.css';
import mission from '../assets/mission.png';
import FacilityCard from './FacilityCard';

function Facilities() {
    const facilities = [
        { id: 1, name: 'Hostel', img: mission },
        { id: 2, name: 'Library', img: mission },
        { id: 3, name: 'Gym', img: mission },
        { id: 4, name: 'Cafeteria', img: mission },
        { id: 5, name: 'Sports Facilities', img: mission },
     
    ];

    return (
        <>
            <h2 className='sub-heading'>Facilities</h2>
            <div className="facilities-div">
                {facilities.map(facility => (
                    <FacilityCard
                        key={facility.id}
                        name={facility.name}
                        img={facility.img}
                    />
                ))}
            </div>
        </>
    );
}

export default Facilities;
