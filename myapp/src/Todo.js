import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myarr: []};
    }

    todo() {
       
        if (this.state.txt1) {
            const newTask = this.state.txt1;
            this.setState(prevState => ({
                myarr: [...prevState.myarr, newTask], 
                txt1: ''
            }));
        }
    }

    render() {
        return (
            <>
                <h1>Todo</h1>
                Enter Task: 
                <input type='text' value={this.state.txt1} onChange={(e) => this.setState({ txt1: e.target.value })} />
                <input type='button' value="Add Todo" onClick={this.todo.bind(this)} />
                <ul> {this.state.myarr.map((task, index) => (
                        <li key={index}>{task}</li> 
                    ))}
                </ul>
            </>
        );
    }
}

export default Todo;

