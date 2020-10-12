import React from 'react';
import './style.css';
import pic6 from './assets/nav-bar.jpg';
import pic4 from './assets/phone.jpg';
import pic5 from './assets/gps1.jpg';
import pic3 from './assets/button_main.png';
import pic from "./assets/LANDING PAGE BG.jpg";
import pic2 from "./assets/cake-factory-logo.jpg";



const page_one = () => {
    return(
        <div>
            <div>
                <div>
                    <img src = {pic} alt="mypic" style={{"width":"100%"}} />
                </div>
                <div>
                    <img src= {pic2} alt="" className="pic-2-img"/>
                </div>
                <div>
                    <h3 className="object-cls">MADE WITH LOVE</h3>
                    <p className="object1-cls">Maecenas interdum nisi sit</p>
                    <p className="object2-cls">sit amet pulvinar volutpat.</p>
                    <p className="object3-cls">felis eu neque vehicula fringilla.</p>
                </div>
                <div>
                    <img src= {pic3} alt="" className="pic-3-img"/>
                    <h5 className="object4-cls">EXPLORE</h5>
                </div>
                <div>
                    <h4 className="contact-cls">Contact Us</h4>
                    <h5 className="delivery-cls">Delivery In</h5>
                    <h6 className="menu-cls">Menu</h6>
                </div>
                <div>
                    <img src= {pic4} alt="" className="pic-4-img"/>
                    <img src={pic5} alt="" className="pic-5-img"/>
                    <img src={pic6} alt="" className="pic-6-img"/>
                </div>
            </div>
        </div>
    )

}

export default page_one