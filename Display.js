import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
function Display () {

    const [data,setdata]=React.useState([]);

    React.useEffect(()=>{
        getdata()

    },[])


    const getdata=()=>{
        axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")
        .then(res=>{
           console.log(res)
            setdata(res.data.todo_list)
        })
        .catch(err=>alert(err))
    }

    const deletedata=(id)=>{
        var myformdata=new FormData()
        myformdata.append("todo_id",id)
        axios.post("https://akashsir.in/myapi/crud/todo-delete-api.php",myformdata)
        .then(res=>{
            if(res.data.flag==='1'){
                alert("data deleted")
            }
            else
            {
                alert("sorry")
            }
            getdata()

        })
        .catch(err=>alert(err))
    }
    return ( <>

      <h1>Display</h1>
      <table border={1}>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Details</th>
            <th>Action</th>

        </tr>
        {data.map((value,index)=>{
            var id=value.todo_id
            var eid="/edit/"+value.todo_id



            var id=value.todo_id

            return(<tr>
                <td>{value.todo_id}</td>
                <td>{value.todo_title}</td>
                <td>{value.todo_details}</td>

                <td> <Link to={eid}>Edit </Link>
           <input type='button' value="X" onClick={()=>deletedata(id)}/>

           </td>
            </tr>)
            
        })}
      </table>

      
      
    
    </> );
}

export default Display ;
