import React from 'react';
import ObjectList from './Components/ObjectList';
import CreateObject from './Components/CreateObject';
import UpdateObject from './Components/UpdateObject';
import GetObject from './Components/GetObject';
import { useState } from 'react';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="App">
      <ObjectList />
      <CreateObject />
      {selectedId && (
        <>
          <UpdateObject id={selectedId} />
          <GetObject id={selectedId} />
        </>
      )}
    </div>
  );
}

export default App;