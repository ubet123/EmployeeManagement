import React from 'react'
import HeadSection from '../Others/HeadSection'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <HeadSection changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard