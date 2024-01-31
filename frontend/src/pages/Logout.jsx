// Logout.js
import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/logout', { token: 'your_token_here' });
      console.log(response.data); // Handle success, e.g., redirect to login page
    } catch (error) {
      //console.error(error.response.data); // Handle error
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;