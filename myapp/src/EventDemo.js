function EventDemo(){
    function clickDemo(e){
        // console.log(e);
       // console.log(e.type);
        // console.log(e.target.name);
         console.log(e.target.value);
    }
    function checkData(e){
        var year=e.target.txt1.value
        if(year%4==0){
            alert("year is leap year")
        }
        else
        {
            alert("year is not leap year ")
        }
        e.preventDefault()
    }
    return(<>
    <h1>Eventdemo</h1>

    Textbox:<input type="text" onChange={clickDemo} name="txt1" />
    <input type="button" name="btn1" value="i am button 1" onClick={clickDemo} />
    <input type="button" name="btn2" value="i am button 2" onClick={clickDemo} />
    <input type="button" value="i am button " onClick={()=> alert('welcome')} />

    <form onSubmit={checkData}>
        Year:<input type="text" name="txt1"></input>
        <input type="submit"/>

    </form>
    </>)

}

export default EventDemo;