import React  from 'react'
import {Routes,Route} from 'react-router-dom';
import Select from './Select';
import Delete from './Delete'
import Map from './Map'
const Todo = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Map/>}/>
     <Route path="/select" element={<Select/>}/>
     <Route path="/delete" element={<Delete/>}/>
    </Routes>
    </>
  )
}

export default Todo