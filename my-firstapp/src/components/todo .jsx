import React, { useState } from 'react';

function AddItemToList() {
    //declare state variable for items and input value
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    //event handler to handle state input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // event handler to add items to  list
    const handleToAddItems = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("");
        };
    };
    // event handler to remove items
    const handleToRemoveItems = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);

    };

    return (
        <div className='container '>
            <div className='row mt-5 '>
                <div className='col-lg-12'>
                    <h3 className='text-secondary'>To Do List</h3>
                    <input type='text' value={inputValue}
                        onChange={handleInputChange} placeholder='Enter Item' ></input>
                    <button className='btn btn-primary ms-2' onClick={handleToAddItems}>Add</button>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button onClick={()=>handleToRemoveItems(index)} className='btn btn-danger ms-1'>x</button>
                            </li>

                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )

}

export default AddItemToList;
