import React, { useEffect, useState } from 'react';
import { getObjects, deleteObject,getObject } from '../service/api';

const ObjectList = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetchObjects();
  }, []);

  const fetchObjects = async () => {
    try {
      const response = await getObjects();
      setObjects(response.data);
    } catch (error) {
      console.error('Error fetching objects:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteObject(id);
      fetchObjects();
    } catch (error) {
      console.error('Error deleting object:', error);
    }
  };
  const object = async(id)=>{
    await getObject(id)
    
  }
  return (
    <div>
      <h1>Objects List</h1>
      <ul>
        {objects.map((obj) => (
          <li key={obj.id}>
            {obj.name} - {JSON.stringify(obj.data)}
            <button onClick={() => handleDelete(obj.id)}>Delete</button>
            <button onClick={() => object(obj.id)}>see</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;
