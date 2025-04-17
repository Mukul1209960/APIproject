import React from "react";

export default function UserInfo(){
    const info = JSON.parse(localStorage.getItem("userInfo"));
    const movies = JSON.parse(localStorage.getItem("MovieInfo"));
    return (
       <div className="bg-blue-500 w-50 p-4 border rounded-lg"> 
       <p>{info.name}</p>
       <p>{info.username}</p>
       <p>{info.email}</p>
       <br />
       {movies.map((item)=>{
        return (<div className="bg-blue-300 border items-center rounded-lg m-2 p-2" key={item}>{item}</div>);
       })};
       </div>
    )
}