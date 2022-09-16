import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../../config';
import "../../bootstrap.min.css";


export const HomePages = () => {
  const [titles, setTitles] = useState([]);
  const navigate = useNavigate();
  useEffect( () => {
    const getTitles = async () => {
      try{
        const { data } = await axios.get(`${API}todos`);
        console.log(data);
        setTitles(data);

      }
      catch(err){
        //
      }
    }
    getTitles();
  }, []);

  return (
    <div className='container'>
      <div className="judul">
        <h1>My HomePages</h1>
      </div>
      {titles.map( (title) => (
        <div className="card border-light mb-3" style={{maxWidth: '50%',marginLeft: '320px', marginRight: '150px', padding: '20px', alignItems: 'center'}}>
          <div class="card-title" style={{ fontWeight: '400', fontSize:'20px' }}>{title.id}</div>
          <div class="card-text" style={{marginBottom: '10px'}}>Title : {title.title}</div>
          <button className='btn  btn-primary' style={{width: '120px'}} onClick={() => navigate(`/${title.id}`)}>Show</button>
        </div>
      ))}      
    </div>
  )
}
