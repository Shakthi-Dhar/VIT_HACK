import React from 'react'
import './header.css'
import Call from '../assets/emergency-call.png'
import Notifications from '../assets/notification.png'
import Beds from '../assets/hospital-bed.png'
import Hospital1 from '../assets/hospital.png'
import Home from '../assets/house-black-silhouette-without-door.png'

const Header = () => {
    return (
        <div className='topbar'>
            <table>
                <tr>
                <td><a href="/Part1">
                    {/* <p>Contact and Helpline Info</p>*/}
                    <img src={Call} />
                    </a></td> 
                <td><a href="/Part2">
                    {/* <p>Notifications and Advisories</p> */}
                    <img src={Notifications} />
                    </a></td>
                <td><a href="/Part3a">
                    {/* <p>Hospitals and Beds</p> */}
                    <img src={Beds} />
                    </a></td>
                <td><a href="/Part3b">
                    {/* <p>Medical and Beds</p> */}
                    <img src={Hospital1} />
                    </a></td>
                <td><a href="/Home" >
                    {/* <p>Home</p> */}
                    <img src={Home} />
                </a></td>
                </tr>
            </table>
        </div>
        
    )
}

export default Header

