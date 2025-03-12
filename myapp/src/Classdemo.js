import React from "react";
class Classdemo extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    updateData(e){
        // sum of 2 number 
        // var a=e.target.txt1.value;
        // var b=e.target.txt2.value;
        // var c=parseInt(a)+parseInt(b);
        // alert(c)
        console.log("nams is " ,e.target.name+"value si ",e.target.value )
    }
    render(){
        return (
            <>

                Textbox :<input type="text" name="txt1" onChange={this.updateData.bind(this)}/> <br/>
                Textbox :<input type="text" name="txt2"onChange={this.updateData.bind(this)}/><br/>
                <input type="button" value="i am buuton 1" name="btn1" onClick={this.updateData.bind(this)}/> <br/>
                <input type="button" value="i am button 2" name="btn2" onClick={this.updateData.bind(this)}/>


                {/* sum of 2 num */}
                {/* <form onSubmit={this.updateData.bind(this)}>
                    No 1:<input type="text" name="txt1"/> <br/>
                    No 2: <input type="text" name="txt2"/><br/>
                    <input type="submit" value="+"/>
                </form> */}
            </>
        );
    }
}

export default Classdemo;