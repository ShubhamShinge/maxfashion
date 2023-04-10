import '../Styles/Footer.css';

function Footer() {
    return (
        <div style={{margin:"0rem 4rem"}}>
            <hr />
            <div className='subscribeanddownload'>
                <div className='subscribe'>
                    Subscribe to our awesome emails.
                    <div className='tag1'>Get our latest offers and news straight in your inbox.</div>
                </div>
                <div className='Download'>
                    Download our Apps.
                    <div className='tag2'>Shop our products and offers on-the-go.</div>
                </div>
            </div>
            {/* <div className="search">
  <button type='email' className="searchbar">Enter your Emial Id
  </button>
  <button type='submit' className='Searchtext'>Search</button>
</div> */}
            <div className='images'>
                <input
                    type="text" className='searchbar'
                    placeholder="Enter your Email Id"
                ></input>
                <button type='submit' className='Searchtext'>Search</button>
                <div className='image1'>
                    <img id='img1' src="https://static.vecteezy.com/system/resources/previews/002/520/835/original/download-application-button-apple-app-store-free-vector.jpg" alt="play store" />
                </div>
                <img id='img2' src="https://static.whatsapp.net/rsrc.php/v3/yo/r/UQI9orMwdga.png" alt="google play" />
            </div><hr></hr>
            <div className='contents'>
                <div className='women'><h5>Women</h5>
                    <div className='tops' style={{fontSize:"medium"}}>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Tops</a>
                    </div>
                    <div className='dresses'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Dresses&Jumpsuits</a>
                    </div>
                    <div className='sportswear'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Sportswear</a>
                    </div>
                    <div className='bottoms'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Buttoms</a>
                    </div>
                    <div className='winterwear'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Winterwear</a>
                    </div>
                    <div className='ethinicwear'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Ethnicwear</a>
                    </div>
                    <div className='lingerie'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Lingerie</a>
                    </div>
                    <div className='sleepwear'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Sleepwear</a>
                    </div>
                    <div className='accessories'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Accessories</a>
                    </div>
                    <div className='shoes'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Shoes</a>
                    </div>
                </div>
                <div className='men'><h5>Men</h5>
                    <div className='top'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Tops</a>
                    </div>
                    <div className='sportswears'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Sportswear</a>
                    </div>
                    <div className='bottoms1'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Buttoms</a>
                    </div>
                    <div className='winterwears'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Winterwear</a>
                    </div>
                    <div className='accessories1'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Accessories</a>
                    </div>
                    <div className='shoes1'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Shoes</a>
                    </div>
                </div>
                <div className='boys'><h5>Boys</h5>
                    <div className='tops1'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Tops</a>
                    </div>
                    <div className='bottoms1'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Buttoms</a>
                    </div>
                    <div className='indianwear'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Indianwear</a>
                    </div>
                    <div className='winterwear1'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Winterwear</a>
                    </div>
                    <div className='essentials'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Essentials</a>
                    </div>
                    <div className='sleepwear'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Sleepwear</a>
                    </div>
                    <div className='accessories'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Accessories</a>
                    </div>
                    <div className='shoes'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Shoes</a>
                    </div>
                </div>
                <div className='girls'><h5> Girls</h5>
                    <div className='tops3'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Tops</a>
                    </div>
                    <div className='bottoms3'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Buttoms</a>
                    </div>
                    <div className='indianwear3'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Indianwear</a>
                    </div>
                    <div className='winterwear13'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Winterwear</a>
                    </div>
                    <div className='essentials3'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Essentials</a>
                    </div>
                    <div className='sleepwear3'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Sleepwear</a>
                    </div>
                    <div className='accessories3'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Accessories</a>
                    </div>
                    <div className='shoes3'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Shoes</a>
                    </div>
                </div>
                <div className='boys'><h5>Explore</h5>
                    <div className='offers'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Offers</a>
                    </div>
                    <div className='magazine'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Magazine</a>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='about1'><h5> About</h5>
                    <div className='aboutus'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>About Us</a>
                    </div>
                    <div className='write'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Write to us</a>
                    </div>
                    <div className='take'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Take a Tour</a>
                    </div>
                    <div className='blog'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Blog</a>
                    </div>
                    <div className='store'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Store Locator</a>
                    </div>
                    <div className='landmark'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Landmark</a>
                    </div>
                    <div className='cares'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Cares</a>
                    </div>
                </div>
                <div className='help'><h5>Help</h5>
                    <div className='contactus'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Contact Us</a>
                    </div>
                    <div className='shipping'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Shipping</a>
                    </div>
                    <div className='return'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Returns</a>
                    </div>
                    <div className='process'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Process</a>
                    </div>
                    <div className='policy'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Policy</a>
                    </div>
                    <div className='helpcenter'>
                        <a style={{fontSize:"smaller",color:"black",textDecoration: "none"}} href='#'>Help Center</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='icons'>
                <div className='phonesicon'>
                    <img id='phoneicon' src="https://thumbs.dreamstime.com/b/call-icon-cdr-171462700.jpg" alt="phone" />
                    <div className='phoneiconscontent'>
                        <p id='talk'>Talk To Us</p>
                        1800-123-1444
                    </div>
                </div>
                <div className='helpcentericon'>
                    <img id='helpicon' src="https://image.shutterstock.com/image-vector/question-mark-speech-bubble-icon-260nw-720160648.jpg" alt="help center" />
                    <div className='phoneiconscontent'>
                        <p id='talk'>Help Center</p>
                        help.maxfashion.com
                    </div>
                </div>
                <div className='messageicon'>
                    <img id='messageicon' src="https://cdn-icons-png.flaticon.com/512/1004/1004017.png" alt="message" />
                    <div className='phoneiconscontent'>
                        <p id='talk'>Talk To Us</p>
                        help.in@maxfashin.com
                    </div>
                </div>
                <img id='fbicon' src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="message" />
                <img id='twittericon' src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="message" />
                <img id='instagramicon' src="https://cdn-icons-png.flaticon.com/512/87/87390.png?w=740&t=st=1671272503~exp=1671273103~hmac=dec110a792a58822463eda3741b9fb51c888612ec86f6febfd1778cdaa8d5827" alt="message" />
            </div>
            <hr></hr>
            <div className='lastfooter'>
                <img id='maxicon' src='https://play-lh.googleusercontent.com/G6CTTmXabDiuM42IQUUuKc0cCunygI55Ddkr8R2CmT8jFeXxo4zbCSK2Zbv8iGPED_w'></img>
                <div className='copyrights'>© 2022 Retail World Limited.<br></br>
Terms & Conditions - Privacy Policy</div>
            </div>
        </div>
    );
}
export default Footer;