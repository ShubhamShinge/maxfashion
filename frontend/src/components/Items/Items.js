import '../Styles/items.css'
import {FiHeart} from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from "react-modal";
import '../Styles/modal.css';
import {BiRupee} from 'react-icons/bi';
export default function Items({setLoginModalIsOpen}){
    const[APIdata,setApiData]=useState([]);
    const[size,setSize]=useState("");
    const [editItemModal, setEditItemModal] = useState(false);
    const[selectedItem,setSelectedItem]=useState()
    const[price,setPrice]=useState();
    const[description,setDescription]=useState();
    const[url,setUrl]=useState();
    const[discount,setDiscount]=useState();
    const[brand,setBrand]=useState();
    const[editItem,setEditItem]=useState({});
    const stockList=[1,0,0,0,0]
    useEffect(() => {
        axios.get("http://localhost:9090/item/getallitems").then(
            (response)=>{
                setApiData(response.data)
                console.log(response.data);
            }
        )
    }, [])
    const deleteItem=(itemName)=>{
        axios.delete(`http://localhost:9090/item/deleteitem/${itemName}`).then((response)=>{
        })
    }
    const updateItem=(itemname)=>{
        console.log(price);
        axios.put(`http://localhost:9090/item/updateitem`,{
            "itemName":itemname,
            "url":url,
            "price":price,
            "description":description,
            "brand":brand,
            "discount":discount,
        }).then((response)=>{
            console.log(response.data);
        })
    }
    const addItemToCart=(data)=>{
        if(localStorage.getItem("useremail")==="Log In"||localStorage.getItem("useremail")==="null"){
            setLoginModalIsOpen(true);
        }
        else if(size!==""){
        axios.post(`http://localhost:9090/cartItem/save`,{
            "userEmail":localStorage.getItem("useremail"),
	        "itemName":data.itemName,
            "size":size
        }).then(
            
            alert("Item added successfully to cart.")
           
        );
    }
        else{
            alert("Plz Selct size");
        }
        setSelectedItem("")
    }
    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div className="item-main"  style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
        {APIdata.map((data)=>{
            return(
                <>
            <div className='item-card'>
                <img className="item-img" src={data.url} alt="Item Loading"></img>
                <div className='line1-item'>
                    <div style={{display:"flex"}}>
                        <BiRupee style={{marginTop:"5px"}}/>{parseInt(data.price*(100-data.discount)/100)} &nbsp;
                        <strike style={{display:(data.discount===0)?"none":"block"}}>{data.price}</strike>
                        <div style={{display:(data.discount===0)?"none":"block",color:"red"}}>&nbsp;{data.discount}%</div>    
                    </div>
                    <FiHeart style={{fontSize: "1rem", marginRight:"10px" }}/>
                </div>
                <div className='line1-item'>
                    <div>{data.itemName}</div>
                    <div style={{fontSize:"12px"}}>{data.brand}</div>
                </div>
                <div className='item-size-box'>
                    <div style={{paddingLeft:"4px"}}>
                        <div className='item-size' onClick={(e)=>{setSize("XS");setSelectedItem(data.itemName)}} 
                       style={{background:(size==="XS"&&selectedItem===data.itemName)?"blue":"White"}}>XS</div>
                        <div>{data.stock[0].quantity} | </div>
                    </div>
                    <div style={{paddingLeft:"4px"}}>
                        <div className='item-size' onClick={(e)=>{setSize("S");setSelectedItem(data.itemName)}}style={{background:(size==="S"&&selectedItem===data.itemName)?"blue":"White"}}>&nbsp;S&nbsp;</div>
                        <div>{data.stock[1].quantity} | </div>
                    </div>
                    <div style={{paddingLeft:"4px"}}>
                        <div className='item-size' onClick={(e)=>{setSize("M");setSelectedItem(data.itemName)}} style={{background:(size==="M"&&selectedItem===data.itemName)?"blue":"White"}}>&nbsp;M&nbsp;</div>
                        <div>{data.stock[0].quantity} | </div>
                    </div>
                    <div style={{paddingLeft:"4px"}}>
                        <div className='item-size' onClick={(e)=>{setSize("L");setSelectedItem(data.itemName)}} style={{background:(size==="L"&&selectedItem===data.itemName)?"blue":"White"}}>&nbsp;L&nbsp;</div>
                        <div>{data.stock[2].quantity} | </div>
                    </div>
                    <div style={{paddingLeft:"4px"}}>
                        <div className='item-size' onClick={(e)=>{setSize("XL");setSelectedItem(data.itemName)}} style={{background:(size==="XL"&&selectedItem===data.itemName)?"blue":"White"}}>XL</div>
                        <div>{data.stock[3].quantity}</div>
                    </div>
                </div>
                <div className='buttons-items'>
                    <div>
                        <button style={{backgroundColor:"#303ab2",color:"whitesmoke" , border:"2px #303ab2 solid",padding:"0 4rem"}} onClick={(e)=>{addItemToCart(data)}}>ADD TO CART</button>
                    </div>
                    {localStorage.getItem("useremail")==="ADMIN"?
                    <div className='admin-buttons-items'>
                        <button style={{backgroundColor:"#303ab2",color:"whitesmoke" , border:"2px #303ab2 solid",margin:"0.5rem 1rem 0rem 0rem",padding:"0rem 1.5rem"}} onClick={()=>{setEditItemModal(true);setEditItem(data);stockList[0]=2}}>EDIT</button>
                        <button onClick={(e)=>{deleteItem(data.itemName);e.preventDefault();window.setTimeout(function () {
                            window.location.reload();
                        }, 500);}} style={{backgroundColor:"#303ab2",color:"whitesmoke" , border:"2px #303ab2 solid",margin:"0.5rem 0rem  0rem 0.5rem",padding:"0rem 1.5rem"}}>DELETE</button>
                        </div>:null}
                        </div>
                        </div>
                        <Modal style={{
                            backgroundColor:"rgba(255, 255, 255, 0.75)"}} className="Feedback" isOpen={editItemModal} onRequestClose={() => setEditItemModal(false)}>
                            <div className="signup_body">
                                <button className="button-X" onClick={() => setEditItemModal(false)}> X</button>
                            <div className="signup">
                                <h2 className="signup_content">Edit an Item</h2>
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
                                        defaultValue={editItem.itemName}
                                        disabled="true"></input>
                                    </div>
                                    <div>
                                        <b className="mobile">Brand : </b>
                                        <input
                                        className="input_signup"
                                        type="text"
                                        defaultValue={editItem.brand}
                                        onChange={(e)=>setBrand(e.target.value)}
                                        placeholder="Enter Brand Name"
                                        ></input>
                                    </div>
                                </div>
                                <div className="groupinputs_login">
                                    <div>
                                        <b className="mobile">Price :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
                                        <input
                                        className="input_signup"
                                        type="text"
                                        placeholder="Enter price for item"
                                        defaultValue={editItem.price}
                                        onChange={(e)=>setPrice(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <b className="mobile">Description : </b>
                                        <input
                                        className="input_signup"
                                        type={"text"}
                                        placeholder="Enter Item Description."
                                        defaultValue={editItem.description}
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
                                    defaultValue={editItem.url}
                                    onChange={(e)=>setUrl(e.target.value)}
                                    ></input>
                                    </div>
                                    <div style={{display:"flex",marginTop:"1rem"}}>
                                        <b className="mobile">Discount :&nbsp;&nbsp;&nbsp; </b>
                                        <input type="number" 
                                        style={{width:"4rem",height:"1.8rem"}}
                                        placeholder="0-50%"
                                        onChange={(e)=>setDiscount(e.target.value)}
                                        defaultValue={editItem.discount}></input>
                                    </div>
                                 </div>
                                 <div className="groupinputs_login">
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <b className="mobile">XS &nbsp;&nbsp;&nbsp; </b>
                                        <input type="number" style={{width:"4rem"}} placeholder="qty" defaultValue={editItem.stock} onChange={(e)=>{stockList[0]=e.target.value}}></input>
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
                                        <input type="number" style={{width:"4rem"}} placeholder="qty" defaultValue={stockList[0]} onChange={(e)=>{stockList[4]=e.target.value}}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="login-buttons">
                                <button className="button-continue" onClick={() =>{updateItem(editItem.itemName)}}>Update Item</button> 
                            </div>
                            </div>
                        </Modal>
                       </>
            );
        })}
        </div>
        </div>
        </>
    )
}