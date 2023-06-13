import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

const Map = () => {
    const navigate=useNavigate();
    const initialTodos = [
        {id:0,title:"Orange",date:"2023-06-01"}
    ];
    const completedTasks=[
        {}
    ]
    const deletedTasks=[
        {}
    ]
    const[task,setTask]=useState("");
    const [date,setDate]=useState('');
    const[todos,setTodos]=useState(initialTodos);
    const [value,setValue]=useState('');
    const[data,setData]=useState("");
    const[completed,setCompleted]=useState(completedTasks);
    const[deleted,setDeleted]=useState(deletedTasks);
    const clickHandler=(e)=>{
        setValue("");
        setTask(e.target.value);
    }
    const dateHandler=(e)=>{
        setDate('')
     console.log(e.target.value);
      setDate(e.target.value);
    }
    const addTask=(e)=>{
        e.preventDefault();
        if(task===""){
            setValue("Please enter data");
        }
        else if(date===""){
            setData("Please select date");
        }
        else{
        setTodos([
            ...todos,
            {
            id:todos.length,
            title:task,
            date:date
            }
        ])
        setTask("");
        setValue(" ");
        }
    }
    const selectHandler=(e,item)=>{
        e.preventDefault();
        // const FilteredData=todos.filter((item)=>{
        //     return item.id===inc;
        // })
        // console.log(FilteredData);

        setCompleted(old=>[...old,item])
        // console.log(completed);
    }
    const deleteHandler=(e,item)=>{
        e.preventDefault();
        setDeleted(old=>[...old,item]);
    }
  return (
    <>
    <div id="form">
    <form>
    <input type="text" placeholder='Enter the task' onChange={clickHandler}/>
    <span>{value}</span>
    <input type="date" onChange={dateHandler}/>
    <span>{data}</span>
    <button type="submit" onClick={(e)=>{addTask(e)}}>Submit</button>
    </form>
    </div>
        <table border="5">
            <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Date</th>
            <th>Completed</th>
            <th>Deleted</th>
            </tr>
            {
            todos.map((item,idx)=>{
            if(todos.length>1){
            return(
           <>
           <tbody>
           <td><h1>{item.id}</h1></td>
            <td><h1>{item.title}</h1></td>
            <td><h1>{item.date}</h1></td>
            <td><button onClick={(e)=>selectHandler(e,item)}>Select</button></td>
            <td><button onClick={(e)=>deleteHandler(e,item)}>Delete</button></td>
            </tbody>
           </>
            )
            }
            else{
                return null;
            }
             })
           }
        </table>
   <button onClick={()=>navigate("/select",{state:completed})}>Select</button>
   <button onClick={()=>navigate("/delete",{state:deleted})}>Delete</button> 
    </>
  )
}

export default Map