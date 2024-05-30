import React, { useState } from 'react';
import { createObject } from '../service/api';

const CreateObject = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createObject({ name, data: JSON.parse(data) });
      setName('');
      setData('');
    } catch (error) {
      console.error('Error creating object:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Object</h2>
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
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateObject;
