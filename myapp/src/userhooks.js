import React from 'react'
function Userhooks() {
    const [user,setuser]=React.useState({name:"sanidhya",gender:"Male",age:21});
    return (  <>
        Name : {user.name}<br/>
        Gender :{user.gender}<br/>
        Age :{user.age} <br/>

        <input type='button' value="Update" onClick={()=>setuser({...user,age:22})}/>

    </>);
}

export default Userhooks;