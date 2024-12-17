import React from 'react';
import HeadSection from '../Others/HeadSection';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data }) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen text-white'>
     
      <HeadSection data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
