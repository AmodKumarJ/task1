import React, { useState } from "react";
import axios from "axios";

const NewObject = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [cpuModel, setCpuModel] = useState("");
  const [hardDiskSize, setHardDiskSize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const objectData = {
      name,
      data: {
        year: parseInt(year),
        price: parseFloat(price),
        "CPU model": cpuModel,
        "Hard disk size": hardDiskSize,
      },
    };

    try {
        console.log(objectData)
      const res = await axios.post("https://api.restful-api.dev/objects", objectData);
      if(res)
        {
            console.log(res)
        }
    //   window.location.href = "/";
    } catch (error) {
      console.error("Error creating object:", error);
    }
  };
  return (
    <div>
      <h2>Create New Object</h2>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewObject;
