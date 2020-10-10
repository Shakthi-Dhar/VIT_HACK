import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='topbar'>
            <table>
                <tr>
                <td><a href="/Part1"><p>Contact and Helpline Info</p></a></td>
                <td><a href="/Part2"><p>Notifications and Advisories</p></a></td>
                <td><a href="/Part3a"><p>Hospitals and Beds</p></a></td>
                <td><a href="/Part3b"><p>Medical and Beds</p></a></td>
                <td><a href="/Home"><p>Home</p></a></td>
                </tr>
            </table>
        </div>
        
    )
}

export default Header

