import React, { useState } from "react";

export default function Notes(){
    const [notes,setNotes] = useState(localStorage.getItem("notes") ?? "");
    const handleChange = (e) =>{
        setNotes(e.target.value);
        localStorage.setItem("notes",e.target.value);
    }
    return (
        <>
        <h1 className="text-3xl font-bold">Notes</h1>
        <textarea rows={15} cols={30} className="bg-yellow-400" onChange={handleChange} value={notes}>
            </textarea>
            </>
    )
}