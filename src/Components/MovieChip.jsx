import React from "react";

export default function MovieChip({data,setSelected}){
    const handleClick = ()=>{
        setSelected((prev) => prev.filter((item)=> item !== data ));
    };

    return(
        <div className="text-white bg-green-500 rounded-lg">
        {data} &nbsp; &nbsp; <span onClick={handleClick}>X </span>

        </div>
    );

}