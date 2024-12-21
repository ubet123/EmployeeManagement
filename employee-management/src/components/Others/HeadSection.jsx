import React, { useState, useEffect } from 'react';

const HeadSection = ({ data, changeUser }) => {
  const [username, setUsername] = useState('Admin');

  // Use useEffect to update the username based on `data`
  useEffect(() => {
    if (data && data.firstName) {
      setUsername(data.firstName);
    } else {
      setUsername('Admin');
    }
  }, [data]);

  // Log out the user
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser(''); // Reset user in the parent state
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm hover:bg-red-800"
      >
        Log Out
      </button>
    </div>
  );
};

export default HeadSection;
