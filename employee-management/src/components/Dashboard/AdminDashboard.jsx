import React from 'react';
import HeadSection from '../Others/HeadSection';
import CreateTask from '../Others/CreateTask';
import AllTask from '../Others/AllTask';

const AdminDashboard = () => {
  return (
    <>
    <div className='h-screen w-full p-7'>
    <HeadSection />
    <CreateTask/>
    <AllTask/>
    </div>
    </>
  );
};

export default AdminDashboard;
