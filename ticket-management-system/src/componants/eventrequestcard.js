import '../css/eventreqcard.css';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
const EventReqCard = ({ Name, Location, Date, Time}) => {

    return(

        <div className='reqcard-layout'>
            <div className='reqcard-title'>{Name}</div>
            <div className='reqcard-location'><CiLocationOn className='icon'/> {Location}</div>
            <Link to="" className='reqcard-view-ereq'>View Event Request</Link>
            <div className='reqcard-date'>
                <div className='date-1'>Date</div>
                <div className='reqcard-date-date'>{Date}</div>
                </div>
            <div className='reqcard-time'>
            <div className='time-1'>Time</div>
            <div className='reqcard-time-time'>{Time} </div>
            </div>

        </div>

    );
}

export default EventReqCard;