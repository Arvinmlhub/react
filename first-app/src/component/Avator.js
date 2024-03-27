import React from "react";

export default function Avatar({props}){
    //const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    return (
        <>
            <h1>Hi {props.name} and size is {props.size}</h1>
            <img src={props.img}
            className="avatar"
            />
        </>
    )

}