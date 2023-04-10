import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";

export default function Signup({setSignupModalOpen,signupModalOpen,setLoginModalIsOpen}){
    const[firstName,setFirstName]=useState()
    const[lastName,setLasName]=useState()
    const[mobileNo,setMobileNo]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[cnfPassword,setCnfPassword]=useState()
    const signup=()=>{
        if(password===cnfPassword){
            axios.post(`http://localhost:9090/user/signup`,{
                "firstName":firstName,
                "lastName":lastName,
                "mobileNo":mobileNo,
                "email":email,
                "password":password
            }).then((response)=>{
                console.log(response.data);
                setLoginModalIsOpen(true);
                setSignupModalOpen(false);
            })
        }
        else{
            alert("Both Passwords should match.")
        }
       
        
    }
    return(
        <Modal className="Feedback" isOpen={signupModalOpen} onRequestClose={() => setSignupModalOpen(false)}>
                                <div className="signup_body">
                                    <button className="button-X" onClick={() => setSignupModalOpen(false)}> X</button>
                                    <div className="signup">
                                        <h2 className="signup_content">Sign Up</h2>
                                    </div>
                                    <div className="message">
                                        <p style={{margin:"0"}}>
                                        Enjoy the convenience of a single account across all participating
                                        brands
                                        </p>
                                    </div>
                                    <div className="mobileNumber">
                                        <div className="groupinputs_login">
                                            <div>
                                                <b className="mobile">First Name &nbsp;: </b>
                                                <input
                                                className="input_signup"
                                                type="text"
                                                placeholder="Enter your first name"
                                                onChange={(e)=>setFirstName(e.target.value)}
                                                ></input>
                                            </div>
                                            <div>
                                                <b className="mobile">Last Name : </b>
                                                <input
                                                className="input_signup"
                                                type="text"
                                                placeholder="Enter your last name"
                                                onChange={(e)=>setLasName(e.target.value)}
                                                ></input>
                                            </div>
                                        </div>
                                        <div className="groupinputs_login">
                                            <div>
                                                <b className="mobile">Mobile No. : </b>
                                                <input
                                                className="input_signup"
                                                type="text"
                                                placeholder="Enter your first name"
                                                onChange={(e)=>setMobileNo(e.target.value)}
                                                ></input>
                                            </div>
                                            <div>
                                                <b className="mobile">Email : </b>
                                                <input
                                                className="input_signup"
                                                type="email"
                                                placeholder="Enter your last name"
                                                onChange={(e)=>setEmail(e.target.value)}
                                                ></input>
                                            </div>
                                        </div>
                                        <div className="groupinputs_login">
                                            <div>
                                                <b className="mobile">Password &nbsp;&nbsp;&nbsp;: </b>
                                                <input
                                                className="input_signup"
                                                type="password"
                                                placeholder="Enter your first name"
                                                onChange={(e)=>setPassword(e.target.value)}
                                                ></input>
                                            </div>
                                            <div>
                                                <b className="mobile">Confirm Pswd : </b>
                                                <input
                                                className="input_signup"
                                                type="password"
                                                placeholder="Enter your last name"
                                                onChange={(e)=>setCnfPassword(e.target.value)}
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-buttons">
                                        <button className="button-continue" onClick={() => {signup()}}>Sign Up</button> 
                                    </div>
                                </div>
                            </Modal>
    )
}