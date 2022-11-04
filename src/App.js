import React from 'react'
import './App.css';
import{Route,Routes}from 'react-router-dom';
import{Box}from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail';
const App = () => {
  return (
   <Box width="400px">
   <Navbar></Navbar>
    <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path=".exercise/:id" element={<ExerciseDetail/>}></Route>

    </Routes>
   </Box>
  )
}

export default App