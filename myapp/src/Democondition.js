import React  from "react";

class  Democondition extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    doupdate(){
        if(this.state.islogin){
            this.setState({islogin:false})
        }
        else
        {
            this.setState({islogin:true})
        }
    }
    render(){
        var a=this.state.islogin? "Welcome":"Bye";
        if(this.state.islogin){
            return (<>
                {a}
                <input type="button" value="Logout" onClick={this.doupdate.bind(this)}/>
            </>)
        }else
        {
            return(<>
            {a}
            <input type="button" value="Login" onClick={this.doupdate.bind(this)}/>
            </>)
        }
    }
}

export default Democondition;