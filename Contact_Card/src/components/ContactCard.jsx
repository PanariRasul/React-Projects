import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function ContactCard(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <Avatar img={props.img} />
                </div>
                <div className="bottom">
                    <Info phone={props.phone} />
                    <Info phone={props.email} />
                </div>
            </div>
        </div>
    );
};

export default ContactCard;