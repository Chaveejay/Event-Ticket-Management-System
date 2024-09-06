
import '../css/events.css'

import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';



const EventCard = ({Img,Title, Date, Time, Location,Name,TP}) => {

    return(
        <div className='event-card'>
        <img src={Img} className='event-card-img'></img>
        <div className='event-card-title'>{Title}</div>
        <div className='event-card-details'>
            <div className='event-card-date'>
            <FaCalendarAlt className='event-icon'/> {Date} • {Time}</div>
            <div className='event-card-loc'>
            <FaLocationDot className='event-icon'/> {Location}</div>
            <div className='event-card-loc'>
            <FaUser className='event-icon'/> {Name}</div>
            <div className='event-card-loc'>
            <FaPhoneAlt className='event-icon'/> {TP}</div>
        </div>
        <Link to='/viewevent' className='event-card-buy-btn'>Buy Tickets</Link>
        </div>

        

    )
}

export default EventCard;