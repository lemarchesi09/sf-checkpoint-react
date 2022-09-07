import { useEffect, useState } from "react";
import "./users.css"

const Users = () => {

  const [users, setUsers] = useState([])
  const getApi = async() =>{
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json();
      console.log(data);
      setUsers(data)
    }catch (error){
      console.log(error);
    }
  } 
  console.log('users', users);
  useEffect(()=>{
    getApi()
  }, [])
  

    return (
      <div>
        
        <div className="container-cards">
          {users.map((user) => {
            return(
            
                <div className="users-card" key={user.id}>
                  <p className="title">{user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Company: {user.company.name}</p>
                </div>
            )
          })}
          </div>

      </div>
    );
  }
  
  export default Users;