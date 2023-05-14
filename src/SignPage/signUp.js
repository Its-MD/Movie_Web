import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sign.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/userSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/config';

const SignUp = ()=>{
    const dispatch = useDispatch();
    const userData = useSelector(state=>state.user)
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handlePass = (event)=>{
        setPassword(event.target.value)
    }

    const handleSignUp = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userObj = {
                email: user.email,
                token: user.accessToken,
                uid: user.uid
            }
            dispatch(addUser(userObj))
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        });
    }

    const [isShowPass, setIsShowPass] = useState(false);
    
    const handleShowPass = ()=>{
        if(isShowPass){
            return "text"
        }
        else{
            return "password"
        }
    }

    useEffect(()=>{
        if(userData.isAuth){
            nav("/")
        }
    },[userData.isAuth])

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
                        <input type="email" className="emailInput input" placeholder="Enter your email" onChange={handleEmail} value={email} required/>
                    </div>

                    <div className="inputWrap">
                    <p className="inputTitle">Password</p>
                        <input type={handleShowPass()} className="passInput input"  placeholder="Enter your password" onChange={handlePass} value={password} required />
                    </div>

                    <button className="signBtn" type="submit" onClick={(event)=>{
                        event.preventDefault()
                        handleSignUp(email, password)
                    }}>Sign Up</button>

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