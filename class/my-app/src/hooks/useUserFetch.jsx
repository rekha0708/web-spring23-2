import { useEffect, useState } from "react";
import axios from "axios";

const useUserFetch = (url) => {
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
    }, []);
 
    return {users};
  };

  export default useUserFetch;