import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTAsk from './CompleteTAsk'
import FailedTAsk from './FailedTAsk'

const TaskList = ({ data }) => {
  console.log("data:", data);
  console.log("data.tasks:", data.tasks);

  return (
    <div id="tasklist" className="mt-10 h-[55%] overflow-x-auto py-5 w-full flex items-center justify-start gap-5 flex-nowrap">
      {data.tasks.map((elem, index) => (
        <div key={index} className='flex gap-4'>
          {elem.active && <AcceptTask />}
          {elem.newTask && <NewTask />}
          {elem.completed && <CompleteTAsk />}
          {elem.failed && <FailedTAsk />}
        </div>
      ))}
    </div>
  );
};


export default TaskList