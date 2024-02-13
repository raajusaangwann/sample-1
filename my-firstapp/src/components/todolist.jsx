import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState } from "react";


const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText]=useState("");
    
    const saveHandler=(e)=>{
        //const val=e.target.value;
        setTodo([...todo,text]);
        setText("");

    }
    const onKeyUpHandler=(e)=>{
      setText(e.target.value);
    }
    
    return (
        <div className="container my-4">
            <div className="col-lg-4">
                <div className="todo-input">

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="todo item"
                            aria-label="todo item"
                            aria-describedby="basic-addon2"
                            onKeyUp={onKeyUpHandler}
                        />
                        <Button onClick={saveHandler}className="outline-secondary" id="button-addon">Save</Button>
                    </InputGroup>
                </div>
                <div className="todo-list">
                    <Table striped bordered hover>
                        <tbody>
                            {todo.map(el => (
                                <tr>
                                    <td>{el}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>


                </div>
            </div>

        </div>
    )
}

export default Todo;