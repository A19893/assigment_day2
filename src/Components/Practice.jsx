import React from 'react'

const Practice = () => {
    const item=null ?? "iT IS nuLL";
    const clickHandler=(e)=>{
        alert(e.target.value);
    }
    const clickHandler1=(e)=>{
      alert(e.target.value);
    }
    const divHandler=()=>{
     alert("Div Hanlder Clled");
    }
    const spanHandler=(e)=>{
        e.stopPropagation();
        alert("Span Hanlder Called");
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      alert("Data Submitted");
    }
  return (
    <>
    <h1>Naming and arrow event</h1>
    <input type="text" placeholder='Enter the text' onChange={clickHandler}/>    {/*Naming event*/}
    {/* <button onClick={clickHandler}>Naming Event</button> */}
    {/* <button onClick={(e)=>clickHandler1(e)}>Arrow Event</button> */}
    <input type="text" placeholder='Enter the text' onChange={(e)=>clickHandler1(e)}/>   {/*Arrow event*/}
     {/* Stop Propogation function  */}
    <h2>Stop Propagation Function</h2>
    <div onClick={divHandler}>
        <h1>Hi</h1>
     <span onClick={spanHandler}> Hello</span> 
    </div>
    {/* Prevent default */}
     <form onSubmit={handleSubmit}>
        Name<input type="text" placeholder='Enter Name'/>
        Id <input type="text" placeholder='Enter Id'/>
        <button type="submit">Submit</button>
     </form>
     {/* Nullish Operator*/}
     <h2>{item}</h2>
    </>
  )
}

export default Practice