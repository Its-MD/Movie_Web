import {useState} from 'react';
import './menu.css';
import Home from './icons/Home.png'
import Profile from './icons/Profile.png'
import Watching from './icons/Watching.png'
import History from './icons/History.png'
import Settings from './icons/Settings.png'
import SignOut from './icons/SignOut.svg'
import Theme from './icons/Theme.png'
import { Link } from 'react-router-dom';

const Menu = ()=>{
    const [navItems, setNavItems] = useState([
        {
            title: "Home",
            icon: Home,
            isActive: true,
            route: "/"
        },
        {
            title: "Profile",
            icon: Profile,
            isActive: false,
            route: "profile"
        },
        {
            title: "My Watching List",
            icon: Watching,
            isActive: false,
            route: "watchList"
        },
        {
            title: "History",
            icon: History,
            isActive: false,
            route: "history"
        },
        {
            title: "Settings",
            icon: Settings,
            isActive: false,
            route: "settings"
        }

    ]);

    const classHandler = (active)=>{
        if(active) {return "menuItem itemActive"}
        else {return "menuItem"}
    }
    
    return(
        <div className="menu">
            {
                navItems.map((e, i)=>{
                        return(
                            <Link to={e.route} key={i} className={
                                e.isActive?classHandler(true):classHandler(false)
                                }
                                onClick={()=>{
                                    const disabled = navItems.map((e)=>{
                                        return{...e,isActive:false}
                                    })
                                    disabled[i].isActive=true;
                                    setNavItems(disabled)
                                }}>
                                <img src={e.icon} alt="" className="menuItemIcon"/>
                                <p className="menuItemTitle">{e.title}</p>
                            </Link>
                        )
                })
            }
            <div className="menuItem menuBtns divider">
                <img src={Theme} alt="" className="menuItemIcon"/>
                <p className="menuItemTitle">Theme</p>
            </div>
            <div className="menuItem menuBtns">
                <img src={SignOut} alt="" className="menuItemIcon"/>
                <p className="menuItemTitle">Sign Out</p>
            </div>
        </div>
    )
}
export default Menu;