import React from 'react'
import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import { HomePages } from './pages/HomePages'
import { AboutPages } from './pages/AboutPages'
import { ContactPages } from './pages/ContactPages'
import { EditUserPage } from './pages/EditUserPage'
import { AddUserPage } from './pages/AddUserPage'
import { NotFoundPage } from './pages/NotFoundPage'

export  function App() {
  return (
    <div className='App'>
      <Header/>
      
        <Routes>
          <Route path='/' element={<HomePages/>}/>
          <Route path='/about' element={<AboutPages/>}/>
          <Route path='/contact' element={<ContactPages/>}/>
          <Route path='/user/edit/:id' element={<EditUserPage/>}/>
          <Route path='/user/add' element={<AddUserPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>

      <Footer/>
      
    </div>
  )
}
