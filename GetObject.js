import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const GetObject = () => {
    
        const { id } = useParams();
        const [object, setObject] = useState(null);
      
        useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.restful-api.dev/objects/${id}`);
            setObject(response.data);
          } catch (error) {
            console.error('Error fetching object:', error);
          }
        };
  return (
    <div>
      <h2>Object Details</h2>
      {object ? (
        <div>
          <p>ID: {object.id}</p>
          <p>Name: {object.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default GetObject
