import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../../config';

export const HomePages = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect( () => {
    const getUsers = async () => {
      try{
        const { data } = await axios.get(`${API}users`);
        console.log(data);
        setUsers(data);

      }
      catch(err){
        //

      }

    
    }
    getUsers();
  }, []);
  return (
    <div>
      <ul>
        {users.map( (user) => (
          <li>
            <div>
              <p>id : {user.id}</p>
              <p>name : {user.name}</p>
              <p>company : {user.company.name}</p>
              <p>email : {user.email}</p>
              <button onClick={() => navigate(`${user.id}`)}>
                Show Details
              </button>
            </div>
          </li>

        ))}
      </ul>
    </div>
  )
}
