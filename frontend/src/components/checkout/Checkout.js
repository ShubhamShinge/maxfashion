import axios from "axios";
import { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import "../Styles/checkout.css";
export default function Checkout() {
  const [data, setData] = useState([]);
  const [newAddress, setNewAddress] = useState(false);
  const [addressSaved, setAddressSaved] = useState(false);
  const [addresschecked, setAddressChecked] = useState(false);
  const [addressSelected, setaddressSelected] = useState();
  const [name, setName] = useState();
  const [houseNo, setHouseNo] = useState();
  const [streetNo, setStreetNo] = useState();
  const [landmark, setLandmark] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState();
  const [mobileNo, setMobileNo] = useState();
  const[paymentMethod,setPaymentMethod]=useState("UPI");
  const[color,setColor]=useState("#ecedeb");
  useEffect(() => {
    axios
      .get(`http://localhost:9090/address/getbyuser/${localStorage.getItem("useremail")}`)
      .then((resonse) => {
        setData(resonse.data);
      });
  }, []);
  const setAddress = (address) => {
    setAddressChecked(true);
    setaddressSelected(address.id);
    setName(address.name + ",");
    setHouseNo(address.houseNo + ",");
    setStreetNo(address.streetNo + ",");
    setLandmark(address.landmark +",");
    setCity(address.city +",");
    setState(address.state +",");
    setPincode(address.pincode);
    setMobileNo(address.mobileNo +".");
    document.getElementById("radio1" + address.id);
  };
  const addAddress1=()=>{
    axios.post(`http://localhost:9090/address/save`,{
      "userEmail":localStorage.getItem("useremail"),
      "name":name,
      "mobileNo":mobileNo,
      "pincode":pincode,
      "city":city,
      "state":state,
      "houseNo":houseNo,
      "streetNo":streetNo,
      "landmark":landmark
    }).then((response)=>{
      // window.location.reload();
      setAddress(response.data);
      setAddressSaved(true)
      
    })
  };
  return (
    <>
      <div className="checkoutMain">
        <h4>Shipping And Payment</h4>
        <hr></hr>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "solid lightgray 1px",
                padding: "1rem",
                width: "45rem",
                margin: "0.5rem",
                height: "max-content",
              }}
            >
              <div style={{ fontSize: "medium",fontWeight:"600" }}>Shipping Method</div>
              <div
                style={{
                  display: addressSaved ? "flex" : "none",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "medium" }}>
                    {name} {houseNo} {streetNo} {landmark} {city} {state} {pincode},
                  </div>
                  <div style={{ fontSize: "medium" }}>
                    Mobile Number: +91{mobileNo}
                  </div>
                </div>
                <div
                  style={{ color: "#303AB2" }}
                  onClick={(e) => {
                    setAddressSaved(false);
                  }}
                >
                  Edit
                </div>
              </div>
              <div style={{ display: addressSaved ? "none" : "block" }}>
                <hr></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "700",
                    marginBottom:"1rem"
                  }}
                >
                  <div style={{ fontSize: "medium"}}>
                    Select Your Shipping Address.
                  </div>
                  <button
                    style={{
                      color: newAddress ? "#c7caea" : "#303AB2",
                      fontSize: "medium",
                      backgroundColor: "white",
                      border: "none",
                    }}
                    onClick={(e) => {
                      setNewAddress(true);
                    }}
                    disabled={newAddress ? true : false}
                  >
                    Add new address
                  </button>
                </div>
                <div
                  style={{
                    display: newAddress ? "block" : "none",
                    border: "1px solid lightgray",
                    marginTop: "1rem",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      style={{ backgroundColor: "white", border: "none" }}
                      onClick={() => setNewAddress(false)}
                    >
                      X
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      margin: "0.5rem 1rem",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      Full Name:
                      <input
                        type="text"
                        style={{ width: "20rem", padding: "0.5rem" }}
                        placeholder="Enter Your Name."
                        onChange={(e)=>{setName(e.target.value)}}
                      ></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      Mobile Number:
                      <input
                        type="text"
                        style={{ width: "20rem", padding: "0.5rem" }}
                        placeholder="Enter Mobile No."
                        onChange={(e)=>{setMobileNo(e.target.value)}}
                      ></input>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      margin: "0.5rem 1rem",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      Pincode:
                      <input
                        type="text"
                        style={{ width: "20rem", padding: "0.5rem" }}
                        placeholder="Enter Your Pincode."
                        onChange={(e)=>{setPincode(e.target.value)}}
                      ></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      City:
                      <input
                        type="text"
                        style={{ width: "20rem", padding: "0.5rem" }}
                        placeholder="Enter Your city or Town."
                        onChange={(e)=>{setCity(e.target.value)}}
                      ></input>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      margin: "0.5rem 1rem",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      State:
                      <input
                        type="text"
                        style={{ width: "20rem", padding: "0.5rem" }}
                        placeholder="Enter Your State."
                        onChange={(e)=>{setState(e.target.value)}}
                      ></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      House name or number:
                      <input
                        type="text"
                        style={{ width: "20rem", padding: "0.5rem" }}
                        placeholder="Enter Your House Details."
                        onChange={(e)=>{setHouseNo(e.target.value)}}
                      ></input>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      margin: "0.5rem 1rem",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      Street name or number:
                      <input
                        type="text"
                        style={{ width: "20rem", padding: "0.5rem" }}
                        placeholder="Enter Your Street Details."
                        onChange={(e)=>{setStreetNo(e.target.value)}}
                      ></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      Landmark:
                      <input
                        type="text"
                        style={{ width: "20rem", padding: "0.5rem" }}
                        placeholder="Enter Your LandMark details."
                        onChange={(e)=>{setLandmark(e.target.value)}}
                      ></input>
                    </div>
                  </div>
                  <div style={{ padding: "1rem 1rem" }}>
                    <button
                      onClick={(e)=>{addAddress1();setNewAddress(false);}}
                      style={{
                        width: "100%",
                        backgroundColor: "#303ab2",
                        color: "white",
                        height: "3rem",
                      }}
                    >
                      ADD ADDRESS & CONTINUE
                    </button>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      width: "100%",
                    }}
                  >
                    {data.map((address, i) => {
                      return (
                        <div
                          onClick={() => {
                            setAddress(address);
                          }}
                        >
                          <hr style={{margin:"0"}}></hr>
                          <label
                            style={{
                              paddingLeft: "1rem",
                              display: "flex",
                              flexDirection: "column",
                            }}
                            for={"radio1" + address.id}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                                <div style={{display:"flex",padding:"0.5rem"}}>
                                    <input type="radio" id={"radio1" + address.id} name="addressRadioButton"></input>
                                    <div style={{padding:"1rem"}}>
                                        <div>{address.name}</div>
                                        <div>
                                        {address.houseNo}, {address.streetNo},
                                        </div>
                                        <div>
                                        {address.city}, {address.state}{" "}
                                        {address.pincode}
                                        </div>
                                        <div>Mobile Number: +91{address.mobileNo}</div>
                                    </div>
                                </div>
                              <div
                                style={{
                                  display:
                                    addresschecked &&
                                    addressSelected === address.id
                                      ? "flex"
                                      : "none",
                                  alignItems: "center",
                                }}
                              >
                                <button
                                  style={{
                                    backgroundColor: "#303ab2",
                                    color: "white",
                                    padding: "0.5rem 2rem",
                                    border: "none",
                                    fontWeight: "600",
                                  }}
                                  onClick={() => setAddressSaved(true)}
                                >
                                  PROCEED TO PAYMENT
                                </button>
                              </div>
                            </div>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="paymentsMain">
                <div className="paymentDiv">
                  Payment Method
                </div>
                <hr style={{ margin: "0.01rem" }}></hr>
                <div style={{ display: addressSaved ? "flex" : "none" }}>
                  <div className="paymentMethods">
                    <div style={{backgroundColor:(paymentMethod==="UPI")?"white":"#ecedeb"}} 
                    className="paymentUpiBox"
                    onClick={()=>{setPaymentMethod("UPI")}}
                    onMouseOver={()=>{setColor("white")}}
                    onMouseLeave={()=>{setColor("#ecedeb")}}>
                      UPI
                    </div>
                    <div style={{backgroundColor:(paymentMethod==="Credit/Debit")?"white":"#ecedeb"}} 
                    className="paymentUpiBox"
                    onClick={()=>{setPaymentMethod("Credit/Debit")}}
                    onMouseOver={()=>{setColor("white")}}
                    onMouseLeave={()=>{setColor("#ecedeb")}}>
                      Credit / Debit Card
                    </div>
                    <div style={{backgroundColor:(paymentMethod==="Net Banking")?"white":"#ecedeb"}} 
                    className="paymentUpiBox"
                    onClick={()=>{setPaymentMethod("Net Banking")}}
                    onMouseOver={()=>{setColor("white")}}
                    onMouseLeave={()=>{setColor("#ecedeb")}}>
                      Net Banking
                    </div>
                    <div style={{backgroundColor:(paymentMethod==="Wallets")?"white":"#ecedeb"}} 
                    className="paymentUpiBox"
                    onClick={()=>{setPaymentMethod("Wallets")}}
                    onMouseOver={()=>{setColor("white")}}
                    onMouseLeave={()=>{setColor("#ecedeb")}}>
                      Wallets
                    </div>
                    <div style={{backgroundColor:(paymentMethod==="EMI")?"white":"#ecedeb"}} 
                    className="paymentUpiBox"
                    onClick={()=>{setPaymentMethod("EMI")}}
                    onMouseOver={()=>{setColor("white")}}
                    onMouseLeave={()=>{setColor("#ecedeb")}}>
                      EMI
                    </div>
                    <div style={{backgroundColor:(paymentMethod==="Cash On Delivery")?"white":"#ecedeb"}} 
                    className="paymentUpiBox"
                    onClick={()=>{setPaymentMethod("Cash On Delivery")}}
                    onMouseOver={()=>{setColor("white")}}
                    onMouseLeave={()=>{setColor("#ecedeb")}}>
                      Cash On Delivery
                    </div>
                </div>
                <div style={{display:(paymentMethod==="Cash On Delivery")?"flex":"none"}}>We are launching soon!</div>
                <div style={{display:(paymentMethod==="EMI")?"flex":"none"}}>We are launching soon!</div>
                <div style={{display:(paymentMethod==="Wallets")?"flex":"none"}}>We are launching soon!</div>
                <div style={{display:(paymentMethod==="Net Banking")?"flex":"none"}}>We are launching soon!</div>
                <div
                  style={{
                    display:(paymentMethod==="UPI")?"flex":"none",
                    flexDirection: "column",
                    width: "100%",
                    padding: "0.3rem 1rem",
                  }}
                >
                  Select the UPI App for Payment
                  <div>
                    <hr style={{margin:"0.7rem 0.5rem "}}></hr>
                    <input type="radio"></input>
                    <label style={{ paddingLeft: "1rem" }}>Google Pay</label>
                  </div>
                  <div>
                    <hr style={{margin:"0.7rem 0.5rem "}}></hr>
                    <input type="radio"></input>
                    <label style={{ paddingLeft: "1rem" }}>PhonePe</label>
                  </div>
                  <div>
                    <hr style={{margin:"0.7rem 0.5rem "}}></hr>
                    <input type="radio"></input>
                    <label style={{ paddingLeft: "1rem" }}>Paytm</label>
                  </div>
                  <div>
                    <hr style={{margin:"0.7rem 0.5rem "}}></hr>
                    <input type="radio"></input>
                    <label style={{ paddingLeft: "1rem" }}>Bhim</label>
                  </div>
                  <div>
                    <hr style={{margin:"0.7rem 0.5rem "}}></hr>
                    <input type="radio"></input>
                    <label style={{ paddingLeft: "1rem" }}>Whatsapp</label>
                  </div>
                  <div>
                    <hr style={{margin:"0.7rem 0.5rem "}}></hr>
                    <input type="radio"></input>
                    <label style={{ paddingLeft: "1rem" }}>
                      Other UPI apps
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display:(paymentMethod==="Credit/Debit")?"flex":"none",
                    flexDirection: "column",
                    width: "100%",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Add a new card
                  <hr></hr>
                  <div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                      Card Number :
                      <input style={{padding:"0.6rem 1rem",marginTop:"0.3rem"}} placeholder="Enter 16 digit card number"></input>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                      Name on card :
                      <input style={{padding:"0.6rem 1rem",marginTop:"0.3rem"}} placeholder="Cardholders Name"></input>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <div style={{display:"flex",flexDirection:"column"}}>
                        Expiry Date :
                        <input type="date" style={{padding:"0.6rem 1rem",marginTop:"0.3rem",width:"15rem"}} placeholder="Enter 16 digit card number"></input>
                      </div>
                      <div style={{display:"flex",flexDirection:"column"}}>
                          CVV :
                          <input style={{padding:"0.6rem 1rem",marginTop:"0.3rem",width:"10rem"}} placeholder="Enter CVV"></input>
                      </div>
                    </div>
                    <button style={{padding:"0.5rem",width:"100%",marginTop:"0.5rem",backgroundColor:"#303AB2"}}>PAY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              right: "0",
              justifyContent: "right",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "solid lightgray 1px",
                padding: "1rem",
                margin: "0.5rem",
                height: "max-content",
                width: "25rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: "15px" }}>Deliver To :</div>
                <div>
                  <div style={{ fontSize: "20px" }}>
                    {localStorage.getItem("useremail")}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "solid lightgray 1px",
                padding: "1rem",
                margin: "0.5rem",
                height: "max-content",
                width: "25rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: "15px" }}>Total Items :</div>
                <div style={{ fontSize: "20px" }}>count</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: "15px" }}>Total Amount :</div>
                <div style={{ fontSize: "20px" }}>
                  <BiRupee style={{ fontSize: "25px" }}></BiRupee>totalAmount
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: "15px" }}>Offer Price:</div>
                <div style={{ fontSize: "20px", color: "green" }}>
                  -discount
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontSize: "15px" }}>Shipping Charge</div>
                <div style={{ fontSize: "15px" }}>Free</div>
              </div>
              <hr></hr>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontWeight: "700",
                }}
              >
                <div style={{ fontSize: "15px" }}>Amount To Be Paid</div>
                  <div style={{ fontSize: "20px", color: "#303AB2" }}>
                    <BiRupee style={{ fontSize: "25px" }}></BiRupee>discountAmt
                  </div>
                </div>
                <button
                  style={{
                    color: "whitesmoke",
                    backgroundColor: "#303AB2",
                    padding: "0.5rem 0rem",
                    fontWeight: "600",
                  }}
                >
                Checkout Now
                </button>
                <div
                  style={{
                    backgroundColor: "#efefef",
                    fontSize: "13px",
                    margin: "0.4rem 0rem",
                    padding: "0.4rem",
                  }}
                >
                  Shipping charges might vary based on pincode delivery location
                </div>
            </div>
          </div>
        </div>
      </div>

      {/*
<div style={{display:"grid",gridTemplateColumns: "1fr"}}>
                    {item1.map((item)=>{
                        increment(item.quantity,item.item.price)
                     return(
                <div style={{display:"flex",flexDirection:"column",border:"solid lightgray 1px",padding:"1rem",width:"55rem",margin:"0.5rem",height:"max-content"}}>
                    <div style={{display:"flex"}}>
                        <div >
                            <img height={"150rem"} width={"120rem"} src={item.item.url}></img>
                        </div>
                        <div style={{padding:"0rem 1rem"}}>
                            <div>
                                Name:{item.item.itemName}
                            </div>
                            <div style={{paddingTop:"1rem"}}>
                                Price:${item.item.price}
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
                */}
    </>
  );
}
