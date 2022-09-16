import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import API from '../../config';


export const UserDetailPage = () => {
  const [user, setUsers] = useState(null);
  const params = useParams();
  useEffect( () => {
    const getUsers = async () => {
      try{
        const { data } = await axios.get(`${API}users/${params.id}`);
        setUsers(data);
        console.log(data);

      }
      catch(err){
        //
      }
    }
    getUsers();
  }, []);

    
  return (
    <div>
      <h1>Ini user detail page {params.id}</h1>

      <div>
        Name: {user?.name}
      </div>
      <div>
        Email: {user?.email}
      </div>
      <div>
        Company: {user?.company.name}
      </div>

      
    </div>
  )
}
