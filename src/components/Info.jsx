import React from "react";
import pic from '../assets/images/IMG.jpg'

export default function Info(){
    return(
        <div className="info-div">
            <img src={pic} className="info-pic"/>
            <h1 className="info-name">Natnael Tilahun</h1>
            <p className="info-position">Fullstack Developer</p>
            <p className="info-website">NhattyTech.com</p>
            <div className="info-btns">
                <button className="email-btn">
                    <a href="mailto:natnaeltilahun97@gmail.com" className="email-link"><i className="fa fa-envelope"  style={{paddingRight: "10px"}}></i>Email
                    </a>
                </button>
                <button className="linkedin-btn">
                    <a href="https://www.linkedin.com/in/natnael-tilahun/" className="linkedin-link" target=""><i className="fa fa-linkedin" style={{marginRight: "8px",background:"white", color:'#5093E2', padding:'1.2px', borderRadius:'2px'}}></i>LinkedIn
                    </a>
                </button>
            </div>
        </div>
    )
}