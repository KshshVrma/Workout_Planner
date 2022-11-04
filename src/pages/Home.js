import React from 'react'
import {useState}from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import {Box}from '@mui/material';

const Home = () => {
  return (
    <Box>
<Box>
  <HeroBanner/>
  <SearchExercises/>
  <Exercises/>
</Box>

    </Box>
  )
}

export default Home