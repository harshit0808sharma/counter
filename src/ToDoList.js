import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () =>{
    const [num, setNum] = useState(0);
    const incNum = () =>{
        setNum(num +1);
    };
    const decNum = () =>{
        if(num>0){
            setNum(num-1);
        }else{
            setNum(0);
        }
        
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>counter</h1>
                    <h2> {num} </h2>
                    <div className="btn_div">
                        <button onClick={incNum}> Incream </button>
                        <button onClick={decNum}> Decream </button>
                    </div>
                    
                </div>

            </div>
        </>
    );
};
export default ToDoList;
