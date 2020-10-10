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
                <td><Link to="/Part1">
                    {/* <p>Contact and Helpline Info</p>*/}
                    <img src={Call} />
                    </Link></td> 
                <td><Link to="/Part2">
                    {/* <p>Notifications and Advisories</p> */}
                    <img src={Notifications} />
                    </Link></td>
                <td><Link to="/Part3a">
                    {/* <p>Hospitals and Beds</p> */}
                    <img src={Beds} />
                    </Link></td>
                <td><Link to="/Part3b">
                    {/* <p>Medical and Beds</p> */}
                    <img src={Hospital1} />
                    </Link></td>
                <td>
                    <a>
                        <img src={Graph} />
                    </a>
                </td>
                <td><Link to="/Home" >
                    {/* <p>Home</p> */}
                    <img src={Home} />
                </Link></td>
                </tr>
            </table>
        </div>
        
    )
}

export default Header

