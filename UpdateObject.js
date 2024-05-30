import React, { useState, useEffect } from 'react';
import { getObject, updateObject } from '../service/api';

const UpdateObject = ({ id }) => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchObject = async () => {
      try {
        const response = await getObject(id);
        setName(response.data.name);
        setData(JSON.stringify(response.data.data));
      } catch (error) {
        console.error('Error fetching object:', error);
      }
    };
    fetchObject();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateObject(id, { name, data: JSON.parse(data) });
    } catch (error) {
      console.error('Error updating object:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Object</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Data (JSON format)"
        value={data}
        onChange={(e) => setData(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateObject;
