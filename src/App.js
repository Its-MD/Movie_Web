import './App.css';
import Menu from './Menu/menu';
import Home from './Home/home';
import MainMD from './MovieDetails/MainMD/mainMD'
import SignUp from './SignPage/signUp'
import LogIn from './SignPage/logIn'
import { BrowserRouter, Routes, Route, Outlet, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="MainApp">
      <HashRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Outlet/>}/>
          <Route path="/watchList" element={<Outlet/>}/>
          <Route path="/movieID" element={<MainMD/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/logIn" element={<LogIn/>}/>

          {/* <Route path="/history" element={<Outlet/>}/>
          <Route path="/settings" element={<Outlet/>}/> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;