import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate,  } from 'react-router-dom'

export  function AddUserPage() {
    const [user,setUser]= useState({
        name:'',
        email:'',
        phone:'',
        age:'',
    });

    const navigate = useNavigate();

   
    const onChangeinput = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setUser({...user,[name]:value});
    }

    const submitHandler = async (event)=>{
        event.preventDefault();

        await axios.post(`http://localhost:3000/users/`,user);
        navigate(-1);
    }



  return (
    <div className='AddUserPage'>
        <button className='primary add' onClick={()=> navigate(-1)}>Go back</button>
        <h2>Add new user</h2>

        <form onSubmit={submitHandler} >
            <div className='inputBox'>
                <span>Name: </span>
                <input type="text" value={user.name} name='name' onChange={onChangeinput} />
            </div>
            <div className='inputBox'>
                <span>Email: </span>
                <input type="text" value={user.email} name='email' onChange={onChangeinput} />
            </div> <div className='inputBox'>
                <span>Phone: </span>
                <input type="tel" value={user.phone} name='phone' onChange={onChangeinput} />
            </div> <div className='inputBox'>
                <span>Age: </span>
                <input type="number" value={user.age} name='age' onChange={onChangeinput} />
            </div>
            <input type='submit' value='Create' className='primary2' />
        </form>
    </div>
  )
}
