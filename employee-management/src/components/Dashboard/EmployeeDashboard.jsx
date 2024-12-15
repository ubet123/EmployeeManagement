import React from 'react'
import HeadSection from '../Others/HeadSection'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <HeadSection/>
        <TaskListNumbers/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard