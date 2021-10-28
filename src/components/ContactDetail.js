import React from "react";
import { Link } from "react-router-dom";
import userimg from "../images/user.png"

const ContactDetail = (props) => {
    const {name, email} = props.location.state.contact;
    console.log(props)
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={userimg} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="ui card centered">
                <Link to="/">
                    <button className="ui button blue centered">Back To Contact List</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;