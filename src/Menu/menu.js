import { useState } from "react";
import "./menu.css";

import LightHouse from "./icons/DarkTheme_LightIcons/House.svg";
import LightLogout from "./icons/DarkTheme_LightIcons/Logout.svg";
import LightProfile from "./icons/DarkTheme_LightIcons/Profile.svg";
import LightTheme from "./icons/DarkTheme_LightIcons/Theme.svg";
import LightWatch from "./icons/DarkTheme_LightIcons/WatchList.svg";

import DarkHouse from "./icons/LightTheme_DarkIcons/House.svg";
import DarkLogout from "./icons/LightTheme_DarkIcons/Logout.svg";
import DarkProfile from "./icons/LightTheme_DarkIcons/Profile.svg";
import DarkTheme from "./icons/LightTheme_DarkIcons/Theme.svg";
import DarkWatch from "./icons/LightTheme_DarkIcons/WatchList.svg";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Redux/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/config";
import { toggleTheme } from "../Redux/themeSlice";

const Menu = () => {
  const [navItems, setNavItems] = useState([
    {
      title: "Home",
      icon: {
        light: LightHouse,
        dark: DarkHouse,
      },
      isActive: true,
      route: "/",
    },
    {
      title: "Profile",
      icon: {
        light: LightProfile,
        dark: DarkProfile,
      },
      isActive: false,
      route: "profile",
    },
    {
      title: "My Watching List",
      icon: {
        light: LightWatch,
        dark: DarkWatch,
      },
      isActive: false,
      route: "watchList",
    },
  ]);

  const classHandler = (active) => {
    if (active) {
      return "menuItem itemActive";
    } else {
      return "menuItem";
    }
  };
  const dispatch = useDispatch();
  const isLight = useSelector((state) => state.theme);

  return (
    <div className={`menu ${isLight ? "lightMenu" : ""}`}>
      {navItems.map((e, i) => {
        return (
          <Link
            to={e.route}
            key={i}
            className={e.isActive ? classHandler(true) : classHandler(false)}
            onClick={() => {
              const disabled = navItems.map((e) => {
                return { ...e, isActive: false };
              });
              disabled[i].isActive = true;
              setNavItems(disabled);
            }}
          >
            <img src={e.icon.light} alt="" className="menuItemIcon" />
            <p className="menuItemTitle">{e.title}</p>
          </Link>
        );
      })}
      <div
        className="menuItem menuBtns divider"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        <img src={LightTheme} alt="" className="menuItemIcon" />
        <p className="menuItemTitle">Theme</p>
      </div>
      <div
        className="menuItem menuBtns"
        onClick={() => {
          dispatch(removeUser());
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            });
        }}
      >
        <img src={LightLogout} alt="" className="menuItemIcon" />
        <p className="menuItemTitle">Sign Out</p>
      </div>
    </div>
  );
};
export default Menu;
