//import React, { useEffect, useState } from "react";
//import axios from "axios";
import useUserFetch from "./hooks/useUserFetch";

/*const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);*/

  const Users = () => {

    const url = "https://jsonplaceholder.typicode.com/users"

    const {users} = useUserFetch(url);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
