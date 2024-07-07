import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export  function HomePages() {

    const[users,setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        loadingData();
    },[])

    const loadingData = async ()=>{
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
    }

    const DeleteUser = async (id)=>{
       await axios.delete(`http://localhost:3000/users/${id}`);
       loadingData();
    }



  return (
    <div className='HomePages'>
        <div className='primary_add'>
            <button onClick={()=> navigate('/user/add')}>Add new user</button>
        </div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=>(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.age}</td>
                                    <button className='primary' onClick={()=>navigate(`user/edit/${user.id}`)}>Edit</button>
                                    <button className='Delete' onClick={()=> DeleteUser(user.id)}>Delete</button>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
        
    
    </div>
  )
}


