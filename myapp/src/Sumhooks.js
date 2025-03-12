import React from 'react';
function Sumhooks() {
    const [no1,setno1]=React.useState(0);
    const [no2,setno2]=React.useState(0);
    const[ans,setans]=React.useState();
    
    const dosum=()=>{
        var c=parseInt(no1)+parseInt(no2);
        setans("Sum is " +c);
    }

    return ( <>

    No1:<input type='text' onChange={(e)=>setno1(e.target.value)}/> <br/>
    No2:<input type='text' onChange={(e)=>setno2(e.target.value)}/> <br/>
    <input type='button'  value="sum" onClick={dosum}/>
    {ans}
    </> );
}

export default Sumhooks;
