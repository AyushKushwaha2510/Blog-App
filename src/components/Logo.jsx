import React from "react";

function Logo({className}){

    return (
        <div className={className} >
            <img src="/favicon.png" alt="LOGO" className="w-10"/>
        </div>
    )
}

export default Logo;