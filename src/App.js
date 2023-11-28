import logo from './logo.svg';
import './App.css';
import { Typography} from '@mui/material';


import Header from './components/Headers/Header';
import Home from './pages/Home/Home';
// import Register from './pages/Register/Register';
import Edit from './pages/Edit/Edit';
// import Profile from './pages/Profile/Profile';

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Header sx={{paddingBottom:'50px'}}/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/register' element={<Register/>}/> */}
          <Route path='/edit/:id' element={<Edit/>}/>
          {/* <Route path='/userprofile/:id' element={<Profile/>}/> */}
      </Routes>
    </>
  );
}

export default App;
