import React from 'react'
import './header.css'
import Call from '../assets/phone-receiver.png'
import Notifications from '../assets/notification.png'
import Beds from '../assets/hospital-bed.png'
import Hospital1 from '../assets/hospital.png'
import Home from '../assets/house-black-silhouette-without-door.png'
import Graph from '../assets/graph-bar.png'
import {Link}from 'react-router-dom';

const Header = () => {
    return (
        <div className='topbar'>
            <table>
                <tr>
                <td className='call'><Link to="/Part1">
                    {/* <p>Contact and Helpline Info</p>*/}
                    {/* <img src={Call} /> */}
                    <p className='call-text'>Contacts</p>
                    </Link></td> 
                <td className='Notifications'><Link to="/Part2">
                    {/* <p>Notifications and Advisories</p> */}
                    {/* <img src={Notifications} /> */}
                    <p className='call-text'>Notifications</p>
                    </Link></td>
                <td className='Hospital-beds'><Link to="/Part3a">
                    {/* <p>Hospitals and Beds</p> */}
                    {/* <img src={Beds} /> */}
                    <p className='call-text'>Beds</p>
                    </Link></td>
                <td className='state-beds'><Link to="/Part3b">
                    {/* <p>Medical and Beds</p> */}
                    {/* <img src={Hospital1} /> */}
                    <p className='call-text'>State info</p>
                    </Link></td>
                <td className='graph'>
                    <a>
                        {/* <img src={Graph} /> */}
                        <p className='call-text'>Graph Ays.</p>
                    </a>
                </td>
                <td className='home-page'><Link to="/" >
                    {/* <p>Home</p> */}
                    {/* <img src={Home} /> */}
                    <p className='call-text'>Home</p>
                </Link></td>
                </tr>
            </table>
        </div>
        
    )
}

export default Header

