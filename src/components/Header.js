import React from 'react';
import {NavLink} from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import {BiSearch} from 'react-icons/bi'
import {BsFillBellFill} from 'react-icons/bs'
import account from '../assets/images/acc1.jpg'

const Header = () => {
    const navData = [
        {
            id:1,
            name:"Home",
            path:"/"
        },
        {
            id:2,
            name:"Tv Shows",
            path:"/tvShows"
        },
        {
            id:3,
            name:"Movies",
            path:"/movies"
        },
        {
            id:4,
            name:"Series",
            path:"/series"
        }
    ]
    return(
        <div>
            <div className="header">
                <nav className="navbar navbar-expand-lg ">
                    <img className="ml-3" src={Logo}/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto mr-auto">
                            {
                                navData.map(data => {
                                    return(
                                        <li className="nav-item ml-5" key={data.id}>
                                            <NavLink className="nav-link" to={data.path} exact activeClassName="active">{data.name}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="icons d-flex">
                        <i><BiSearch /></i>
                        <i className="ml-3"><BsFillBellFill /></i>
                        <div className="account">
                            <img src={account}/> 
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;