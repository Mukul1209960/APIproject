import React from 'react'

export default function MovieBox({data,selected,setSelected}){
    const isSelected = selected.includes(data.id);
    const handleClick = ()=>{
        if(selected.includes(data.id)){
            setSelected((prev) => prev.filter((item) => item !== data.id));
        }
        else {
        setSelected((prev)=>{
            return [...prev, data.id];
            
        });
    }
    };
    return (
        <div onClick={handleClick} className="grid justify-center" style={{background:data.color, width:"15vw",
            border: isSelected ? "4px solid green" : ""
        }}>
            <p>{data.id}</p>
            {data.image}
        </div>
    )
}
