import "./App.css";
import Menu from "./Menu/menu";
import Home from "./Home/home";
import MainMD from "./MovieDetails/MainMD/mainMD";
import SignUp from "./SignPage/signUp";
import LogIn from "./SignPage/logIn";
import Profile from "./Profile/profile";
import WatchingList from "./WatchingList/watching";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  HashRouter,
} from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/config";
import { removeUser, addUser } from "./Redux/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user);
        const userObj = {
          email: user.email,
          token: user.accessToken,
          uid: user.uid,
        };
        dispatch(addUser(userObj));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="MainApp">
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/watchList" element={<WatchingList />} />
          <Route path="/movieInfo" element={<MainMD />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/*" element={<Home />} />
          {/* <Route path="/history" element={<Outlet/>}/>
          <Route path="/settings" element={<Outlet/>}/> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
