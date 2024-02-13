import React, { useState } from "react";

export default function Timer(){

    const [count, setCount]=useState(0);
    const timer=()=>{
        setTimeout(()=>{
            setCount(count+1);
        },1000);
    }
    return(
        <div className="container text-dark">
            {timer()}
            {count}

        </div>
    )
}
