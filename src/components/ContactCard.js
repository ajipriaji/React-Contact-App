import React from "react";
import { Link } from "react-router-dom";
import userimg from "../images/user.png"

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={userimg} alt="user" />
            <div className="content">
                <Link 
                to={{pathname: `/contact/${id}`, state:{contact: props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i 
            className="trash alternate outline icon"
            style={{color:"red", marginTop:"7px", marginLeft:"10px" }} 
            onClick={() => props.clickHandler(id)}
            />
            <Link
            to={{pathname: `/edit`, state:{contact: props.contact}}}>
                <i 
                className="edit alternate outline icon"
                style={{color:"blue", marginTop:"7px"}} 
                />
            </Link>
        </div>
    );
};

export default ContactCard;