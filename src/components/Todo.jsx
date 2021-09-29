import React from 'react';
import {IoIosCloseCircle} from 'react-icons/io'
import {TiEdit} from 'react-icons/ti'

const Todo = ({ todo, index, deleteTodo, editTodo }) => {
  return (
    <>
      <div className='list' >
        <input type="checkbox" width="30px" height="30px" />
        <h3 id={'num'+(index)}>{todo}</h3>
        <div className="icons">
        <IoIosCloseCircle className='icons' onClick={() => deleteTodo(index)}/>   
        
        <TiEdit className='icons' onClick={() => editTodo(index)}/>

        {/* <input 
        type='text' 
        name='editTodo' 
        placeholder='Edite ToDo'
        width="25px"
        height="25px"
        // onChange={}
        /> */}
        </div>
      </div>
    </>
  );
};

export default Todo;
