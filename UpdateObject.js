import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateObject = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [cpuModel, setCpuModel] = useState('');
  const [hardDiskSize, setHardDiskSize] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.restful-api.dev/objects/${id}`);
      const object = response.data;
      setName(object.name);
      setYear(object.data.year.toString());
      setPrice(object.data.price.toString());
      setCpuModel(object.data["CPU model"]);
      setHardDiskSize(object.data["Hard disk size"]);
    } catch (error) {
      console.error('Error fetching object:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedObject = {
      name,
      data: {
        year: parseInt(year),
        price: parseFloat(price),
        "CPU model": cpuModel,
        "Hard disk size": hardDiskSize,
      },
    };

    try {
      await axios.put(`https://api.restful-api.dev/objects/${id}`, updatedObject);
      alert('Object updated successfully');
      window.location.href = '/';
    } catch (error) {
      console.error('Error updating object:', error);
    }
  };

  return (
    <div>
      <h2>Update Object</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          CPU Model:
          <input
            type="text"
            value={cpuModel}
            onChange={(e) => setCpuModel(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Hard Disk Size:
          <input
            type="text"
            value={hardDiskSize}
            onChange={(e) => setHardDiskSize(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateObject;
