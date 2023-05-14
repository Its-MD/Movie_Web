import { Link, useNavigate } from 'react-router-dom';
import './sign.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/config';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/userSlice';

const LogIn = ()=>{
    //dispatch is to change state value that is inside store - like set in C#
    const dispatch = useDispatch();
    //selector is giving us back the value of state - in () is short way of writing arrow function
    // the user inside function is the key name inside store
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

    const handleLogIn = (email, password)=>{
        //built in function of firebase to log in
        //auth is reference to connected database
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userObj = {
                email: user.email,
                token: user.accessToken,
                uid: user.uid
            }
            //placing the user data inside redux state (for session)
            dispatch(addUser(userObj))
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }

    //second way to handle promise 
    // const handleLogInAsync = async (email, password)=>{
    //     try {
    //         const result = await signInWithEmailAndPassword(auth, email, password)
    //         const user = result.user;
    //         const userObj = {
    //             email: user.email,
    //             token: user.accessToken,
    //             uid: user.uid
    //     }
    //     dispatch(addUser(userObj))

    //     } catch (error) {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     }
    // }

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
                        <h2 className="title">Hello Again!</h2>
                        <p className="underTitle">Please enter your details</p>
                    </div>

                    <div className="inputWrap">
                        <p className="inputTitle">Email</p>
                        <input type="email" className="emailInput input" placeholder="Enter your email" onChange={handleEmail} value={email}/>
                    </div>

                    <div className="inputWrap">
                    <p className="inputTitle">Password</p>
                        <input type="password" className="passInput input"  placeholder="Enter your password" onChange={handlePass} value={password}/>
                    </div>

                    <button className="signBtn" type="submit" onClick={(event)=>{
                        //preventDefault prevents refresh when on click
                        event.preventDefault()
                        handleLogIn(email, password)
                    }}>Log In</button>
                    
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