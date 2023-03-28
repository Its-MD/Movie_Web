import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sign.css'

const SignUp = ()=>{
    const [isShowPass, setIsShowPass] = useState(false);
    
    const handleShowPass = ()=>{
        if(isShowPass){
            return "text"
        }
        else{
            return "password"
        }
    }
    return(
        <div className="signCont">
            <div className="signForm">
                <form className="formWrap">

                    <div className="titleWrap">
                        <h2 className="title">Create Account</h2>
                        <p className="underTitle">Please enter your details</p>
                    </div>

                    <div className="inputWrap">
                        <p className="inputTitle">Email</p>
                        <input type="email" className="emailInput input" placeholder="Enter your email" required/>
                    </div>

                    <div className="inputWrap">
                    <p className="inputTitle">Password</p>
                        <input type={handleShowPass()} className="passInput input"  placeholder="Enter your password" required />
                    </div>

                    <button className="signBtn" type="submit">Sign Up</button>

                    <p className="redirectText">Already a user?
                        <Link className="logInTxt" to={"/logIn"}> Log In</Link>
                    </p>
                </form>
            </div>
            <div className="sidePicCont">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className="picTmdb" />
            </div>
        </div>
    )
}
export default SignUp