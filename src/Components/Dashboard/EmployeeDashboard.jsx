import React from 'react'
import TaskListNumbers from '../Other/TaskListNumbers';
import Header from '../Other/Header';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  // console.log(data);
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser = {props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard;
