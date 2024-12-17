const TaskListNumbers = ({ data }) => {
  // Access the first task in the tasks array
  const task = data?.tasks?.[0] || {}; // Safely access the first task or default to an empty object
  const { active = 0, newTask = 0, completed = 0, failed = 0 } = task;

  console.log(newTask); // Logs the value from the first task or 0 if undefined

  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] px-9 py-6 bg-red-400">
        <h2 className="text-2xl font-semibold">{newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-blue-400">
        <h2 className="text-2xl font-semibold">{completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-green-400">
        <h2 className="text-2xl font-semibold">{active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-400">
        <h2 className="text-2xl font-semibold">{failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
