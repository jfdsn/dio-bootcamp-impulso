import React from "react";

const RepositoryItem = ({ name, link, fullname}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Full name:</h4>
            <a href={link} target= "_blank" rel= "noreferrer">
                {fullname}</a>
        </div>
    )
}


export default RepositoryItem;