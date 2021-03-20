import React, { Component } from 'react'
import  { Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
    render() {
        return (
            <nav>
                 <Link to = '/'>
                    <img width = "60" src = {"https://icon-library.com/images/black-spotify-icon/black-spotify-icon-17.jpg"} alt = "store"
                    className = "menu-img" />
                </Link>
                <Link to = '/' className="head2">
                <h3 className = "head1">Spotify</h3>
                </Link>
                <ul className="nav-links">
                    <Link to = "/addalbum " className = "nav-links-1">
                    <li>Add Album</li>
                    </Link>
                    <Link to = "/albums" className = "nav-links-2">
                    <li>Albums</li>
                    </Link>
                </ul>
            </nav>
            // <ul className = "nav">
            //       <li className = "nav-1">
            //         <Link to= "/addalbum" className = "nav-add-album">
            //           Add Album
            //         </Link>
            //       </li>
            //       <li className = "nav-2">
            //         <Link to = "/albums" className = "nav-albums">
            //             Albums
            //         </Link>
            //     </li>
            // </ul>
        )
    }
}

export default Nav
