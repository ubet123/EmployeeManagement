import React from 'react'

const CreateTask = () => {
  return (
    <div className=" w-full bg-black text-gray-300 flex flex-col items-center p-8">
   
   

    
    <div className="w-full max-w-5xl bg-gray-900 p-6 rounded-lg shadow-lg">
      <form className="grid grid-cols-2 gap-8 items-start">
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Task Title</h3>
            <input
              type="text"
              className="w-full py-2 px-3 bg-gray-800 text-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Date</h3>
            <input
              type="date"
              className="w-full py-2 px-3 bg-gray-800 text-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Assign To</h3>
            <input
              type="text"
              className="w-full py-2 px-3 bg-gray-800 text-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Category</h3>
            <input
              type="text"
              className="w-full py-2 px-3 bg-gray-800 text-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              placeholder="Design, Development, etc."
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Description</h3>
            <textarea
              cols="30"
              rows="6"
              className="w-full py-2 px-3 bg-gray-800 text-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              placeholder="Add a detailed task description..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default CreateTask