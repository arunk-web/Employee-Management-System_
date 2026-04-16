import React from 'react'
import TaskListNumbers from '../Other/TaskListNumbers';
import Header from '../Other/Header';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({data}) => {
  // console.log(data);
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskListNumbers data={data} />
        <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashboard;
