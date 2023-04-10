import "../Styles/Header.css";
import {AiOutlineUser} from 'react-icons/ai';
import {FiHeart} from 'react-icons/fi';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {TbTruck} from 'react-icons/tb';
import {TbBuildingStore} from 'react-icons/tb';
import {BiSearch} from 'react-icons/bi';
import React, { useState ,useEffect} from "react";
import Modal from "react-modal";
import '../Styles/modal.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import AddItem from "../Modals/AddItem";
import Signup from "../Modals/SignUp";

export default function Header({logModalIsOpen, setLoginModalIsOpen}){
    const[signupModalOpen,setSignupModalOpen]=useState(false);
    const[addItemModal,setAddItemModal]=useState(false);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[userData,setUserData]=useState("Log In");
    const[userAction,setUserAction]=useState("Sign up");
    const navigate=useNavigate();
    let style ={ color:"white" ,fontSize: "1rem",paddingRight:"3px" }
    
    const userLogin=(e)=>{
        axios.get(`http://localhost:9090/user/login/${email}/${password}`)
        .then((response)=>{
            if(response.status===200){
                console.log(response.data);
                setUserData(response.data);
                setLoginModalIsOpen(false);
                localStorage.setItem("useremail",email);
                navigate("/")
                window.location.reload();
            }
        })

        .catch((error)=>{
            console.log(error);
            alert(error.response.data.message);
        })
    }
    useEffect(() => {
        const mail=localStorage.getItem("useremail");
        if(mail==="null"){
            setUserData("Log In")
            setUserAction("Sign Up")
        }
        else{
            setUserData(mail)
        setUserAction("Log Out")}
    }, [])
    const LoginSwitch=()=>{
        if(userData==="Log In"){
            setLoginModalIsOpen(true);
        }
        else{
        }
    }
    const logOutSwitch=()=>{
        if(userAction==="Log Out"){
            localStorage.setItem("useremail",null);
            navigate('/')
            window.location.reload();
        }else{
            setSignupModalOpen(true);
        }
    }
    const cartIcon=()=>{
        if(localStorage.getItem("useremail")==="Log In"||localStorage.getItem("useremail")==="null"){
            setLoginModalIsOpen(true)
        }
        else{
            navigate('/cart')
        }
    }
    return(
        <>  
            <div className="main">
            <div className="blackBox">
                <div className="services-headers">
                    <TbTruck style={style}/>
                    Free Shipping
                </div>    
                <div className="services-headers">
                <TbBuildingStore style={{fontSize: "1rem",paddingRight:"3px" }}/>
                    Return To store
                </div>
                <div className="services-headers">
                    <TbBuildingStore style={{fontSize: "1rem",paddingRight:"3px"}}/>
                    Online Gift Card
                </div>
                <div className="services-headers">
                    DownLoad Our Apps
                </div>
                |
                <div className="services-headers">
                    Store Locator
                </div>
                |
                <div className="services-headers">
                    Help 
                </div>
            </div>
            <div className="main-header">
                <img className="logo" src="https://i1.lmsin.net/website_images/in/logos/logo-max.svg" onClick={()=>navigate('/')}></img>
                <div className="category-box">
                    <div className="category">Women</div>
                    <div className="category">Men</div>
                    <div className="category">Girls</div>
                    <div className="category">Boys</div>
                </div>
                <div className="searchbox">
                    <BiSearch style={{fontSize: "1.5rem",paddingTop:"6px" }}/>
                    <input type="text" className="input-header" placeholder="What are you looking for?"></input>
                </div>
                <div className="profile">
                    {localStorage.getItem("useremail")==="ADMIN"?
                    <div style={{paddingRight:"0.5rem"}} onClick={() => setAddItemModal(true)}>
                        Add Item &nbsp;|
                    </div>
                : <div></div>}
                    <AddItem addItemModal={addItemModal} setAddItemModal={setAddItemModal}/>
                    <div style={{paddingRight:"0.5rem"}}>
                        More &nbsp;|
                    </div>
                    <div style={{paddingRight:"1rem",display:"flex"}}>
                        <div onClick={()=>LoginSwitch()}>
                            {userData} &nbsp;/&nbsp;
                        </div>
                        <Modal className="Feedback" isOpen={logModalIsOpen} onRequestClose={() => setLoginModalIsOpen(false)}>
                            <div className="signup_body">
                                <button className="button-X" onClick={() => setLoginModalIsOpen(false)}> X</button>
                                <div className="signup">
                                    <h2 className="signup_content">Log in</h2> 
                                </div> 
                                <div className="message">
                                    <p style={{margin:"0"}}>
                                    Enjoy the convenience of a single account across all participating
                                    brands
                                    </p>
                                </div>
                                <div className="mobileNumber">
                                    <div className="groupinputs_signup">
                                        <div>
                                            <b className="mobile">Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                                            <input
                                            className="input_login"
                                            type="text"
                                            placeholder="Enter your first name"
                                            onChange={(e)=>setEmail(e.target.value)}
                                            ></input>
                                        </div>
                                        <div>
                                            <b className="mobile">Password : </b>
                                            <input
                                            className="input_login"
                                            type="password"
                                            placeholder="Enter your last name"
                                            onChange={(e)=>setPassword(e.target.value)}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-buttons">
                                    <button className="button-continue" onClick={(e)=>{userLogin(e)}}>Log In</button> 
                                    <button className="button-continue" onClick={() => {setSignupModalOpen(true);setLoginModalIsOpen(false);}}>Sign Up</button> 
                                </div>
                            </div>
                        </Modal>
                        <div style={{marginLeft:"0.5rem"}} onClick={() => logOutSwitch()}>
                            {userAction} 
                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Signup signupModalOpen={signupModalOpen} setSignupModalOpen={setSignupModalOpen} setLoginModalIsOpen={setLoginModalIsOpen}/>
                        </div>
                    </div>
                    <AiOutlineUser style={{ fontSize: "1.5rem", marginRight:"10px",marginLeft:"10px"}}/>
                    <FiHeart style={{fontSize: "1.5rem", marginRight:"10px" }}/>
                    <HiOutlineShoppingBag style={{fontSize: "1.5rem", marginRight:"1px"}} onClick={()=>{cartIcon()}}></HiOutlineShoppingBag>1
                </div>
            </div>
            <div className="border">
            
            </div>
            </div>
        </>
    )
}