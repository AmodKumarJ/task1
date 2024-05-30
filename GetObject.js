import React, { useState, useEffect } from 'react';
import { getObject } from '../service/api';

const GetObject = ({ id }) => {
  const [object, setObject] = useState(null);

  useEffect(() => {
    const fetchObject = async () => {
      try {
        const response = await getObject(id);
        setObject(response.data);
      } catch (error) {
        console.error('Error fetching object:', error);
      }
    };
    fetchObject();
  }, [id]);

  return (
    <div>
      <h2>Object Details</h2>
      {object ? (
        <pre>{JSON.stringify(object, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetObject;
