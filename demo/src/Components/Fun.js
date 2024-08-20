
// import React, {useState} from 'react';

// const Fun = () => {
//     const[task,setTask]=useState('')
//     let[todo,setTodo]=useState([])
//     function addind(){
//         store(task)
//         setTask('')
       
//     }
//    function store(add){
//       setTodo([...todo,add])
//    } 
//    console.log(todo)   
//   return (
//     <div>
//        {/* <input type="text" value={task} onChange={(m) => setTask(m.target.value)} /> */}
//        {/* <button onClick={addind()}>adding</button> */}
//        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
//        <br />
//        {
//         todo.map((ref,index)=>
//             <li key={index}>
//               {ref}

//             </li>
//         )
//        }
//        <button onClick={addind}>appp</button>
//     </div>
//   )
// }

// export default Fun



// const Fun = () => {
//     const[count,setCount]=useState(parseInt(localStorage.getItem('count'))||0)
//     const[email,setEmail]=useState(localStorage.getItem('email'))
//     const[name,setName]=useState(localStorage.getItem('name'))
//     useEffect(()=>{
//         localStorage.setItem('count',count.toString())
//     },[count])
//   return (
//     <div>

//         <button onClick={()=> setCount()}>add</button>
//     </div>
//   )
// }

// // export default Fun
// import React,{useState } from "react";
// import {useContext} from "react";

// export const theme= 


