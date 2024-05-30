
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetObjects from './components/GetObjects';
import GetObject from './components/GetObject';
import NewObject from './components/NewObject';
import UpdateObject from './components/UpdateObject';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element = {<GetObjects/>} />
          <Route path='/object/:id' element={<GetObject/>}/>
          <Route path='/create' element = {<NewObject/>}/>
          <Route path='/update/:id' element={<UpdateObject/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;
