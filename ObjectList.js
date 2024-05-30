import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const GetObjects = () => {
   
    const [objects, setObjects] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
        try {
          const response = await axios.get('https://api.restful-api.dev/objects');
          
          setObjects(response.data);
          
        } catch (error) {
          console.error('Error fetching objects:', error);
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Request data:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
          }
        }
      };
     
    const handleDelete = async (id) => {
        try {
          await axios.delete(`https://api.restful-api.dev/objects/${id}`);
          fetchData();
        } catch (error) {
          console.error('Error deleting object:', error);
        }
      };
    
  return (
    <div>
    <h2>Object List</h2>
    <Link to="/create">Create New Object</Link>
    <ul>
      {objects.map((object) => (
        <li key={object.id}>
          <Link to={`/object/${object.id}`}><h1>{object.name}</h1></Link>
            <p>Color: {object.data?.color}</p>
            <p>Capacity: {object.data?.capacity}</p>
          <button onClick={() => handleDelete(object.id)}>Delete</button>
          <Link to={`/update/${object.id}`}>Edit</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default GetObjects
