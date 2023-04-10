import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import '../Styles/modal.css';

export default function AddItem({addItemModal,setAddItemModal}){
    const[itemname,setItemName]=useState();
    const[brand,setBrand]=useState();
    const[price,setPrice]=useState();
    const[description,setDescription]=useState();
    const[url,setUrl]=useState();
    const[discount,setDiscount]=useState();
    const stockList=[0,0,0,0,0]
    const AddItem=()=>{
        console.log(stockList);
        alert(discount);
        axios.post(`http://localhost:9090/item/additem`,{
            "itemName":itemname,
            "url":url,
            "price":price,
            "description":description,
            "brand":brand,
            "discount":discount,
            "stock":[
                {
                "size":"XS",
                "quantity":stockList[0]
                },
                {
                "size":"S",
                "quantity":stockList[1]
                },
                {
                    "size":"M",
                    "quantity":stockList[2]
                },
                {
                "size":"L",
                "quantity":stockList[3]
                },
                {
                "size":"XL",
                "quantity":stockList[4]
                }
                ]
        }).then((response)=>{
            if(response.status===200){
            setAddItemModal(false);
            window.location.reload();
            }
            else{
                alert("item could not be added");
            }
        })
    }
    return(
        <Modal className="Feedback" isOpen={addItemModal} onRequestClose={() => setAddItemModal(false)}>
            
                            <div className="signup_body">
                                <button className="button-X" onClick={() => setAddItemModal(false)}> X</button>
                            <div className="signup">
                                <h2 className="signup_content">Add an Item</h2>
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
                                        placeholder="Enter your unique Item name"
                                        onChange={(e)=>setItemName(e.target.value)}></input>
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
                                        onChange={(e)=>setPrice(e.target.value)}></input>
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
                                <div className="groupinputs_login">
                                    <div>
                                    <b className="mobile">Image URL : &nbsp;</b>
                                    <input
                                    className="input_login"
                                    type="text"
                                    placeholder="Enter Image Url."
                                    onChange={(e)=>setUrl(e.target.value)}
                                    ></input>
                                    </div>
                                    <div style={{display:"flex",marginTop:"1rem"}}>
                                        <b className="mobile">Discount :&nbsp;&nbsp;&nbsp; </b>
                                        <input type="number" style={{width:"4rem",height:"1.8rem"}} placeholder="0-50%"
                                        onChange={(e)=>setDiscount(e.target.value)}></input>
                                    </div>
                                 </div>
                                 <div className="groupinputs_login">
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <b className="mobile">XS &nbsp;&nbsp;&nbsp; </b>
                                        <input type="number" style={{width:"4rem"}} placeholder="qty" onChange={(e)=>{stockList[0]=e.target.value}}></input>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <b className="mobile">S &nbsp;&nbsp;&nbsp; </b>
                                        <input type="number" style={{width:"4rem"}} placeholder="qty" onChange={(e)=>{stockList[1]=e.target.value}}></input>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <b className="mobile">M &nbsp;&nbsp;&nbsp; </b>
                                        <input type="number" style={{width:"4rem"}} placeholder="qty"  onChange={(e)=>{stockList[2]=e.target.value}}></input>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <b className="mobile">L &nbsp;&nbsp;&nbsp; </b>
                                        <input type="number" style={{width:"4rem"}} placeholder="qty"  onChange={(e)=>{stockList[3]=e.target.value}}></input>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <b className="mobile">XL &nbsp;&nbsp;&nbsp; </b>
                                        <input type="number" style={{width:"4rem"}} placeholder="qty"  onChange={(e)=>{stockList[4]=e.target.value}}></input>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="login-buttons">
                                <button className="button-continue" onClick={() => {AddItem()}}>Add Item</button> 
                            </div>
                            </div>
                            
                        </Modal>
    )
}