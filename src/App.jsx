import React, { useState } from "react";
import ToDoLists  from "./ToDoLists";

const App = ()=>{

    const [inputList,setInputList] = useState("");
    const [Items,setItems] = useState([]);

    const itemEvent = (event)=>{
        setInputList(event.target.value);
    }

    const listOfItems = ()=>{
        setItems( (oldItems)=>{
            return [...oldItems,inputList]
        } )
        setInputList("")
    }

    
    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }

    return (
        <>
            <div className="container">
                <div className="modal">
                    <h1>ToDo List</h1>
                    <div className = "inner">
                        <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList} />
                        <button onClick={listOfItems}> + </button>
                    </div>
                    
                    <ul>
                        {Items.map((itemval,index)=>{
                            return <ToDoLists 
                                text = {itemval} 
                                key = {index}
                                id={index}
                                onSelect = {deleteItems}
                            />
                        })}
                    </ul>

                </div>
            </div>
        </>
  );
};
export default App;