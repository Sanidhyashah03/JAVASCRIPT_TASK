import React from "react";
class Validation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={myerr:{}};
    }
    dovalidation(){
        const {name,surname,mobileno,email,pass,cpass,gender,city,hb}=this.state;
        const mobileRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var isvalid=true
        var temperr={}
        // if(!txt1){
        //     isvalid=false;
        //     temperr.txt1="Enter no 1";

        // }

        // if(!txt2){
        //     isvalid=false;
        //     temperr.txt1="Enter no 2";
            
        // }
        if(name.length<2){
            isvalid=false;
            temperr.name="enter name";
        }
        if(!surname){
            isvalid=false;
            temperr.name="enter Surname";
        }
        if(!mobileRegex.test(mobileno)){
            isvalid=false;
            temperr.name="enter Mobile no";
        }
        if(!emailRegex.test(email)){
            isvalid=false;
            temperr.name="enter email";
        }
        if(!pass){
            isvalid=false;
            temperr.name="enter password";
        }
        if(!cpass ){
            isvalid=false;
            temperr.name="enter confirm password";
        }
        if(pass!==cpass){
            isvalid=false;
            temperr.name="password & confirm pass dose not matched";
        }
        if(!gender){
            isvalid=false;
            temperr.name="choose any one gender";
        }
        if(!city){
            isvalid=false;
            temperr.name="choose any city";
        }
        if(!hb){
            isvalid=false;
            temperr.name="choose any hobbie";
        }
        this.setState({myerr:temperr});
        return isvalid

    }
    dosum(){
        var docheck=this.dovalidation()
        if(docheck==true){
        //     const {txt1,txt2}=this.state
        // var c=parseInt(txt1)+parseInt(txt2);
        this.setState({ans:"data entered successfully "})

        }
        


    }
    doupdate(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <>
            <h2>Validation : </h2> <br/>
             name:<input type="text" name="name" onChange={this.doupdate.bind(this)}/> <br/>
             <p style={{color:"red"}}>{this.state.myerr.name}</p> <br/>
             Surname:<input type="text" name="surname" onChange={this.doupdate.bind(this)}/><br/>
             <p style={{color:"red"}}>{this.state.myerr.surname}</p> <br/>
             Mobile no:<input type="text" name="mobileno" onChange={this.doupdate.bind(this)}/><br/>
             <p style={{color:"red"}}>{this.state.myerr.mobileno}</p>
             Email:<input type="email" name="email" onChange={this.doupdate.bind(this)}/><br/>
             <p style={{color:"red"}}>{this.state.myerr.email}</p>
             Password:<input type="password" name="pass" onChange={this.doupdate.bind(this)}/><br/>
             <p style={{color:"red"}}>{this.state.myerr.pass}</p>

             Confirm Password:<input type="password" name="cpass" onChange={this.doupdate.bind(this)}/><br/>
             <p style={{color:"red"}}>{this.state.myerr.cpass}</p>


             <label>Gender:</label>
        <label>
          <input type="radio" name="gender" value="male"  checked={this.state.gender === 'male'} onChange={this.doupdate.bind(this)}
          /> Male
        </label>
        <label>
          <input  type="radio" name="gender"  value="female"  checked={this.state.gender === 'female'}  onChange={this.doupdate.bind(this)}/>female
        </label>
        <p style={{color:"red"}}>{this.state.myerr.gender}</p>

        <select
          name="city"
          value={this.state.city}
          onChange={this.doupdate.bind(this)}
        >
          <option value="">Select a city</option>
          <option value="bhavnagar">Bhavnagar</option>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="baroda">Baroda</option>
          <option value="rajkot">Rajkot</option>
          <option value="mumbai">Mumbai</option>
        </select> <br/>
        <p style={{color:"red"}}>{this.state.myerr.city}</p> <br/>

        


        {/* <label>Hobbies:</label><br/>
      
        // <label>
        //   <input type="checkbox" value="Reading"onChange={this.doupdate.bind(this)} checked={this.state.hobbies('Reading')} name="hb"
        //   /> Reading
        // </label>
        <label>
          <input type="checkbox"  value="Writing" onChange={this.doupdate.bind(this)} checked={this.state.hobbies.includes('Writing')} name="hb"
          /> Writing
        </label>
        <label>
          <input type="checkbox" value="Watching Movies" onChange={this.doupdate.bind(this)} checked={this.state.hobbies.includes('Watching Movies')} name="hb"
          /> Watching Movies
        </label>
        <label>
          <input type="checkbox" value="Travel"  onChange={this.doupdate.bind(this)} checked={this.state.hobbies.includes('Travel')} name="hb"
          /> Travel
        </label>
        <label>
          <input type="checkbox" value="Music" onChange={this.doupdate.bind(this)}checked={this.state.hobbies.includes('Music')} name="hb"
          /> Music
        </label>
        <p style={{color:"red"}}>{this.state.myerr.hb}</p> */}



<p style={{color: "red"}}>{this.state.myerr.hb}</p>


             <input type="button" onClick={this.dosum.bind(this)} value="submit"/>
             {this.state.ans}


             {/* no1:<input type="text" name="txt1" onChange={this.doupdate.bind(this)}/>
             <p style={{color:"red"}}>{this.state.myerr.txt1}</p> */}
            
            {/* no2:<input tyope="text" name="txt2" onChange={this.doupdate.bind(this)}/>
            <p style={{color:"red"}}>{this.state.myerr.txt2}</p> */}
           
            </>
        )
    }
}

export default Validation