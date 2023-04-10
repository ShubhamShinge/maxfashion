import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import '../Styles/modal.css';

export default function EditItem({editItemModal,setEditItemModal,item}){
    const[itemname,setItemName]=useState();
    const[brand,setBrand]=useState();
    const[price,setPrice]=useState();
    const[description,setDescription]=useState();
    const[url,setUrl]=useState();

    const AddItem=()=>{
        axios.post(`http://localhost:9090/item/additem`,{
            "itemName":itemname,
            "url":url,
            "price":price,
            "description":description,
            "stock":[
                {
                "size":"XS",
                "quantity":500
                },
                {
                "size":"S",
                "quantity":800
                },
                {
                "size":"L",
                "quantity":490
                },
                {
                "size":"XL",
                "quantity":1000
                }
                ]
        }).then((response)=>{
            if(response.status===200){
                setEditItemModal(false);
            window.location.reload();
            }
            else{
                alert("item could not be added");
            }
        })
    }
    return(
        <Modal className="Feedback" isOpen={editItemModal} onRequestClose={() => setEditItemModal(false)}>
                            <div className="signup_body">
                                <button className="button-X" onClick={() => setEditItemModal(false)}> X</button>
                            <div className="signup">
                                <h2 className="signup_content">Edit an Item 123</h2>
                            </div>
                            <div className="message">
                                <p style={{margin:"0"}}>
                                Item Name Should Be Unique And Can't Be Changed!
                                </p>
                            </div>
                            <div className="mobileNumber">
                                <div className="groupinputs_login">
                                    <div>
                                        <b className="mobile">Item Name &nbsp;: </b>
                                        <input
                                        className="input_signup"
                                        type="text"
                                        placeholder="Enter your Item name"
                                        readOnly></input>
                                    </div>
                                    <div>
                                        <b className="mobile">Brand : </b>
                                        <input
                                        className="input_signup"
                                        type="text"
                                        placeholder="Enter Brand Name"
                                        onChange={(e)=>setBrand(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="groupinputs_login">
                                    <div>
                                        <b className="mobile">Price :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
                                        <input
                                        className="input_signup"
                                        type="text"
                                        placeholder="Enter price for item"
                                        onChange={(e)=>setPrice(e.target.value)}>abcd</input>
                                    </div>
                                    <div>
                                        <b className="mobile">Description : </b>
                                        <input
                                        className="input_signup"
                                        type="text"
                                        placeholder="Enter Item Description."
                                        onChange={(e)=>setDescription(e.target.value)}></input>
                                    </div>
                                </div>
                                <div>
                                    <b className="mobile">Image URL : &nbsp;</b>
                                    <input
                                    className="input_login"
                                    type="text"
                                    placeholder="Enter Image Url."
                                    onChange={(e)=>setUrl(e.target.value)}
                                    ></input>
                                 </div>
                                <div className="groupinputs_login">
                                    <div>
                                        <b className="mobile">Password &nbsp;&nbsp;&nbsp;: </b>
                                        <input
                                        className="input_signup"
                                        type="text"
                                        placeholder="Enter your first name"
                                        ></input>
                                    </div>
                                    <div>
                                        <b className="mobile">Confirm Pswd : </b>
                                        <input
                                        className="input_signup"
                                        type="text"
                                        placeholder="Enter your last name"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="login-buttons">
                                <button className="button-continue" onClick={() => {console.log(item);}}>Add Item</button> 
                            </div>
                            </div>
                        </Modal>
    )
}