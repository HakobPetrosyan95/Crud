import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export  function EditUserPage() {
    const [user,setUser]= useState({
        name:'',
        email:'',
        phone:'',
        age:'',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        loadingData();
    },[])

    const loadingData =async()=>{
        const response =await axios.get(`http://localhost:3000/users/${id}`)
        setUser(response.data);
    }
    const onChangeinput = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setUser({...user,[name]:value});
    }

    const submitHandler = async (event)=>{
        event.preventDefault();

        await axios.put(`http://localhost:3000/users/${id}`,user);
        navigate(-1);
    }



  return (
    <div className='EditUserPage'>
        <button className='primary' onClick={()=> navigate(-1)}>Go back</button>
        <h2>Edit user {user.name}</h2>

        <form onSubmit={submitHandler} >
            <div className='inputBox'>
                <span>Name:</span>
                <input type="text" value={user.name} name='name' onChange={onChangeinput} />
            </div>
            <div className='inputBox'>
                <span>Email:</span>
                <input type="text" value={user.email} name='email' onChange={onChangeinput} />
            </div> <div className='inputBox'>
                <span>Phone:</span>
                <input type="tel" value={user.phone} name='phone' onChange={onChangeinput} />
            </div> <div className='inputBox'>
                <span>Age:</span>
                <input type="number" value={user.age} name='age' onChange={onChangeinput} />
            </div>
            <input type='submit' value='Update' className='primary' />
        </form>
    </div>
  )
}
