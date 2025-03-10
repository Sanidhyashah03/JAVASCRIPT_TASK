// import React from 'react';
// import axios from 'axios';
// // Api calling and fetching using class component
// class Fetchapi extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={mydata:[]};
//     }
//     componentDidMount(){
        
//         // fetch("https://fakestoreapi.com/products")
//         // .then(res=>res.json())
//         // .then(res=>{
//         //     //console.table(res)
//         //    // console.log(res)
//         //    this.setState({mydata:res})
//         // })                           
//         // .catch(err=>alert(err))

//         axios.get("https://fakestoreapi.com/products")
//         .then(res=>{
//             console.log(res.data);
//             this.setState(
//                 {mydata:res.data}
//             )
//         })
//     }
//     render(){
        
//         return(<>
//         <h1>Fetchapi</h1>
//         {this.state.mydata.map((Value,index)=>{
//             return(<>
//             <h1>{Value.id}</h1>
//             <h1>{Value.title}</h1>
//             ${Value.price}<br/>
//             <img width={150} src={Value.image}/>
            
//             </>)
//         })}
//         </>)
//     }
   

// }
// export default Fetchapi;



import React from 'react';
import axios from 'axios';

class Fetchapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata: [] }; 
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                console.log(res.data); 
                this.setState({ mydata: res.data });
            })
            .catch(err => alert(err)); 
    }

  

    render() {
        const { mydata } = this.state;

        

        return (
            <>
                <h1>Product Cart</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {mydata.map((value) => (
                        <div key={value.id} style={styles.card}>
                            <img
                                src={value.image}
                                alt={value.title}
                                style={styles.image}
                            />
                            <h3>{value.title}</h3>
                            <p>Price: ${value.price}</p>
                            <button
                                style={styles.button}
                                onClick={() => this.handleBuyClick(value.id)}
                            >
                                Buy
                            </button>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}


const styles = {
    card: {
        width: '250px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default Fetchapi;


