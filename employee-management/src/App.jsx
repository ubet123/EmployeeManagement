import React, { useContext, useState } from 'react';

import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  console.log(authData);

  const handleLogin = (email, password) => {
    if (!authData || !authData.employees || !authData.admin) {
      alert('Auth data not loaded yet. Please try again later.');
      return;
    }

    if (email === 'admin@example.com' && password === '123') {
      setUser({ role: 'admin' });
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser({ role: 'employee' });
        setLoggedInUserData(employee); // Set logged-in employee's data
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', id: employee.id }));
      } else {
        alert('Invalid Credentials!!');
      }
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user?.role === 'admin' && <AdminDashboard />}
      {user?.role === 'employee' && <EmployeeDashboard data={loggedInUserData} />}
    </>
  );
};

export default App;
