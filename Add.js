import axios from "axios";
import React from 'react';


function Add() {
    const[title,settitle]=React.useState("")
    const[details,setdetails]=React.useState("")

    const adddata=()=>{
        var myformdata=new FormData()
        myformdata.append("todo_title",title)
        myformdata.append("todo_details",details)
        axios.post("https://akashsir.in/myapi/crud/todo-add-api.php",myformdata)
        .then(res=>{
            console.log(res)
            if(res.data.flag==="1"){
                alert(res.data.message)
            }
            else
            {
                alert("technical issues"+res.data.message)
            }
        })
        .catch(err=>console.log(err))

    }

    return (  <>
    <br/>
    Title:<input type="text" onChange={(e)=>settitle(e.target.value)}/>
    Details:<input type="text" onChange={(e)=>setdetails(e.target.value)}/>
    <input type="button" value="Add" onClick={adddata}/>
        
    </>);
}

export default Add;