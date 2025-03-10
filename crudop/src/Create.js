import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array"; 
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    
    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (name === "" || age === "" ) {
            alert("Invalid input");
            return;
        }
        const ids = uuid();
        let uni = ids.slice(0, 8);
        array.push({ id: uni, Name: name, Age: age });
        history("/");  
    };

    return (
        <>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" value={name}  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Control onChange={(e) => setAge(e.target.value)} type="number" placeholder="Age" value={age} required />
                </Form.Group>

                <Button variant="primary" type="submit">Submit </Button>

                <Link className="d-grid gap-2" to="/">
                 <Button variant="info" size="lg"> Home </Button>
                </Link>

                
            </Form>
        </>
    );
}


export default Create;





