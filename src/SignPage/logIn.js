import { Link } from 'react-router-dom';
import './sign.css'

const LogIn = ()=>{
    return(
        <div className="signCont">
            <div className="signForm">
                <form className="formWrap">
                    
                    <div className="titleWrap">
                        <h2 className="title">Hello Again!</h2>
                        <p className="underTitle">Please enter your details</p>
                    </div>

                    <div className="inputWrap">
                        <p className="inputTitle">Email</p>
                        <input type="email" className="emailInput input" placeholder="Enter your email"/>
                    </div>

                    <div className="inputWrap">
                    <p className="inputTitle">Password</p>
                        <input type="password" className="passInput input"  placeholder="Enter your password"/>
                    </div>

                    <button className="signBtn" type="submit">Log In</button>
                    
                    <p className="redirectText">Don't have an account?
                        <Link className="logInTxt" to={"/signUp"}> Sign Up</Link>
                    </p>
                </form>
            </div>
            <div className="sidePicCont">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className="picTmdb" />
            </div>
        </div>
    )
}
export default LogIn