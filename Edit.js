import React from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

function Edit() {
    const [title,settitle]=React.useState("")
    const [details,setdetails]=React.useState("")

    var {id} = useParams()
    var mynavigate=useNavigate()

    const getdata = ()=>{
        axios.get(`https://akashsir.in/myapi/crud/todo-detail-api.php?todo_id=${id}`)
        .then(res=>{
            settitle(res.data.todo_title)
            setdetails(res.data.todo_details)
        })
        .catch(err=>alert(err))
    }

    const updataData=()=>{

        var myformdata=new FormData()
        myformdata.append("todo_title",title)
        myformdata.append("todo_details",details)
        myformdata.append("todo_id",id)
        axios.post("https://akashsir.in/myapi/crud/todo-update-api.php",myformdata)
        .then(res=>{
            if(res.data.flag==="1"){
                mynavigate('/display')
            }
            else
            {
                alert("Technical Issue"+res.data.message)
            }
        })
        .catch(err=>console.log(err))
    }  
    
    React.useEffect(()=>{
        getdata()

    },[])
    return (  <>
    <h1>Edit</h1>
    {id}


Title:<input type='text' value={title} onChange={(e)=>settitle(e.target.value)}/>
Details:<input type='text' value={details} onChange={(e)=>setdetails(e.target.value)}/>
<input type='button' value="Add" onClick={()=>updataData()}/>

 
    </>);
}

export default Edit;