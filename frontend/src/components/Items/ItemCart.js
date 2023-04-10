import '../Styles/items.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {BiRupee} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
export default function ItemCart(){
    const email= localStorage.getItem("useremail");
    const[item1,setItem1]=useState([]);
    var count=0
    const[itemCount,setItemCount]=useState(1);
    var discountAmount=0
    var totalAmount=0;
    const navigate=useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:9090/cartItem/getByUser/${email}`).then(
            (response)=>{
                setItem1(response.data)
            }
            )
        }, [itemCount])

        const addItemToCart=(data)=>{
            axios.post(`http://localhost:9090/cartItem/save`,{
                "userEmail":localStorage.getItem("useremail"),
                "itemName":data.item.itemName,
                "size":data.size
            }).then(()=>{
                setItemCount((itemCount) => itemCount+1);
            }
            );}
    const deleteItemFromCart=(data)=>{
        const userEmail=localStorage.getItem("useremail")
        if(localStorage.getItem("useremail")==="Log In"||localStorage.getItem("useremail")==="null"){

        }else{
            axios.put(`http://localhost:9090/cartItem/delete`,{
                "userEmail":userEmail,
                "itemName":data.item.itemName,
                "size":data.size
            }).then(()=>{
                setItemCount((itemCount) => itemCount+1);
            })
        }
    }
    const decreaseItemfromCart=(data)=>{
        axios.put(`http://localhost:9090/cartItem/decrease`,{
            "userEmail":localStorage.getItem("useremail"),
            "itemName":data.item.itemName,
            "size":data.size
        }).then(()=>{
           setItemCount((itemCount) => itemCount+1);
        }
        );}
        const increment=(qty,price,discount)=>{
            totalAmount=totalAmount+(qty*price)
            discountAmount+=(price*discount/100)*qty
            count=count+qty
        }
    return(
        <>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",margin:"2rem 6rem"}}>
            <h1>Your Shopping Basket</h1>
            <hr></hr>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
            <div style={{display:"grid",gridTemplateColumns: "1fr"}}>
                    {item1.map((item)=>{
                        increment(item.quantity,item.item.price,item.item.discount)
                     return(
                <div style={{display:"flex",flexDirection:"column",border:"solid lightgray 1px",padding:"1rem",width:"55rem",margin:"0.5rem",height:"max-content"}}>
                    <div style={{display:"flex"}}>
                        <div>
                            <img height={"150rem"} width={"120rem"} src={item.item.url}></img>
                        </div>
                        <div style={{padding:"0rem 1rem"}}>
                            <div>
                                Name:{item.item.itemName}
                            </div>
                            <div style={{paddingTop:"1rem",display:"flex"}}>
                                <BiRupee style={{marginTop:"5px"}}/>{parseInt(item.item.price*(100-item.item.discount)/100)} &nbsp;
                                <strike style={{display:(item.item.discount===0)?"none":"block"}}>{item.item.price}</strike>
                                <div style={{display:(item.item.discount===0)?"none":"block",color:"red"}}>&nbsp;{item.item.discount}%</div>
                            </div>
                            <div style={{paddingTop:"1rem"}}>
                                Color:Yellow
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",flexBasis:"75%"}}>
                                <div style={{marginRight:"30rem"}}>Size:{item.size}</div>
                                <div>Qty:
                                <button style={{backgroundColor:"#303ab2","padding":"0px 3px",borderRadius:"2px",color:"whitesmoke"}} onClick={()=>addItemToCart(item)}>+</button>
                                {item.quantity}
                                <button style={{backgroundColor:"#303ab2","padding":"0px 5px",borderRadius:"2px",color:"whitesmoke"}} onClick={()=>decreaseItemfromCart(item)}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{display:"flex",justifyContent:"space-evenly",color:"#303AB2",fontSize:"medium",fontWeight:"700"}}>
                        <div onClick={(e)=>{deleteItemFromCart(item)}}>
                        Remove
                        </div>
                        |
                        <div>
                        Move To WishList
                        </div>
                    </div>
                </div>
                );
                 })}
                </div>
                
                 <div style={{display:"flex",flexDirection:"column",right:"0",justifyContent:"right"}}>
                    <div style={{display:"flex",flexDirection:"column",border:"solid lightgray 1px",padding:"1rem",margin:"0.5rem",height:"max-content",width:"25rem"}}>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <div  style={{fontSize:"15px"}}>Deliver To :</div>
                            <div>
                                <div style={{fontSize:"20px"}}>{localStorage.getItem("useremail")}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",border:"solid lightgray 1px",padding:"1rem",margin:"0.5rem",height:"max-content",width:"25rem"}}>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <div  style={{fontSize:"15px"}}>Total Items :</div>
                            <div style={{fontSize:"20px"}}>{count}</div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <div  style={{fontSize:"15px"}}>Total Amount :</div>
                            <div style={{fontSize:"20px"}}><BiRupee style={{fontSize:"25px"}}></BiRupee>{totalAmount}</div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <div  style={{fontSize:"15px"}}>Offer Price:</div>
                            <div style={{fontSize:"20px",color:"green"}}>-{parseInt(discountAmount)}</div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <div  style={{fontSize:"15px"}}>Shipping Charge</div>
                            <div style={{fontSize:"15px"}}>Free</div>
                        </div>
                        <hr></hr>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontWeight:"700"}}>
                            <div  style={{fontSize:"15px"}}>Amount To Be Paid</div>
                            <div style={{fontSize:"20px",color:"#303AB2"}}><BiRupee style={{fontSize:"25px"}}></BiRupee>{parseInt(totalAmount-discountAmount)}</div>
                        </div>
                        <button style={{color:"whitesmoke",backgroundColor:"#303AB2",padding:"0.5rem 0rem",fontWeight:"600"}} onClick={(e)=>(navigate('/checkout'))}>Checkout Now</button>
                        <div style={{backgroundColor:"#efefef",fontSize:"13px",margin:"0.4rem 0rem",padding:"0.4rem"}}>Shipping charges might vary based on pincode delivery location</div>
                    </div>
                </div>
            </div>
        </div>

{/*
        // <div className="item-main"  style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        // {item1.map((item)=>{
        //     return(
        //     <div className='item-card'>
        //         <div>
        //             <img className="item-img" src={item.item.url} alt="Image Loading"></img>
        //         </div>
        //         <div>
        //             <div className='line1-item'>
        //                 ${item.item.price}
        //                 <div style={{fontSize: "1rem", paddingRight:"8px" }}>
        //                 <button style={{backgroundColor:"#303ab2","padding":"0px 4px",borderRadius:"2px",color:"whitesmoke"}} onClick={()=>addItemToCart(item)}>+</button>
        //                 {item.quantity}
        //                 <button style={{backgroundColor:"#303ab2","padding":"0px 4px",borderRadius:"2px",color:"whitesmoke"}} onClick={()=>decreaseItemfromCart(item)}>-</button>
        //                 </div>
        //             </div>
        //             <div className='line1-item'>
        //                 <div>{item.item.itemName}</div>
        //                 <div style={{paddingRight:"1rem"}}>{item.size}</div>
        //             </div>
        //             <div className='buttons-items'>
        //                 <div>
        //                     <button style={{backgroundColor:"#303ab2",color:"whitesmoke" , border:"2px #303ab2 solid",padding:"0 4rem"}} onClick={(e)=>{deleteItemFromCart(item)}}>Delete Item</button>
        //                 </div>
        //                 <div>
        //                     <button style={{backgroundColor:"#303ab2",color:"whitesmoke" , border:"2px #303ab2 solid",padding:"0rem 2rem",marginTop:"0.5rem"}} onClick={(e)=>{}}>Move To WishList</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     );
        // })}
        // </div> */}
        </>
    )
}