import React from 'react'
import { useLocation } from 'react-router-dom'
const Delete = () => {
    const {state} = useLocation();
    console.log(state);
  return (
   <>
   <table border="5">
      <tr>
      <th>Id</th>
      <th>Task</th>
      <th>Date</th>
      </tr>
   {
    state?.map((item)=>{
      return(
         <>
         <tbody>
         <td><h1>{item.id}</h1></td>
          <td><h1>{item.title}</h1></td>
          <td><h1>{item.date}</h1></td>
          </tbody>
         </>
          )
          })
    }
    </table>
   </>
  )
}
export default Delete