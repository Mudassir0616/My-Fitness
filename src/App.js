import './App.css';
import{ Route, Routes } from 'react-router-dom'
import{Box} from '@mui/material'
import Navbar from './Navbar';
import Home from './Home';
import ExerciseDetail from './components/ExerciseDetail';


function App() {
  return (
    <Box width='400px' sx={{width: {xl : '1448px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
    </Box>
  );
}

export default App;
