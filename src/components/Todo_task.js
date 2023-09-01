import React from 'react'
import './Task.css'
import del from './delete.png'
export default function Todo_task(props) {
  return (
    <div className='task_container'>
      <h3>{props.task}</h3>
        <div className="btn_container">
            <button><img src={del} alt="Delete" onClick = {() =>{props.delete(props.task)}} /></button>
        </div>
    </div>
  )
}
