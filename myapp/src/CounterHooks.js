import React  from "react";


function CounterHooks() {
const [counter,setcounter]=React.useState(1);
const [msg,setmsg]=React.useState("");
const[mycounter,setmycounter]=React.useState(1);

React.useEffect(()=>{
    console.log("component loaded or updated");
})

const incremanetdata=()=>{
if(counter>4){
    setmsg("sorry +");
}else
{
    setcounter(counter+1);
    setmsg("");
}
}

const decremanetdata=()=>{
    if(counter<1){
        setmsg("sorry -");
    }
    else
    {
        setcounter(counter-1);
        setmsg("");
    }
}

    return ( 
        <>
        <h1>{counter}
        </h1><br/>

        <input type="button" value="+"onClick={incremanetdata}/>
        <input type="button" value="-" onClick={decremanetdata}/>
        {msg}

        <hr></hr>
        {mycounter}

        <input type="button" value="++" onClick={()=>setmycounter(mycounter+1)}/>
        </>
     );
}

export default CounterHooks;
