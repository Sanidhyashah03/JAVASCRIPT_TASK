import React,{useState,useEffect} from 'react';

const Fetchapi2=()=>{
    const[mydata,setMydata] =useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(res=>{
            setMydata(res);
            // console.log(res);
        })
        .catch(err=>alert(err))
    },[]);

    return(<>
        <h1>Fetchapi 2</h1>
        {mydata.map((value, index) => (
                <div key={index}>
                    <h1>{value.id}</h1>
                    <h1>{value.title}</h1>
                    <p>${value.price}</p>
                    <img width={150} src={value.image} alt={value.title} />
                    <br />
                </div>
            ))}
    </>)
}


export default Fetchapi2;