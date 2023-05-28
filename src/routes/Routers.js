import { Route,Routes,Navigate } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Specialties from '../pages/Specialties'
import Register from '../pages/Register';
import Dashboard from '../admin/Dashboard';


import Users from '../admin/Users';
import Doctors from '../admin/Doctors';
import AddDoctors from '../admin/AddDoctors';
import StaffMedico from './../pages/StaffMedico';


const Routers = () => {
    return (
        <Routes>

            <Route path='/' element={<Navigate to='home'/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='StaffMedico' element={<StaffMedico/>}/>

            <Route path='specialties' element={<Specialties/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            

         
            <Route path='dashboard' element={<Dashboard/>}/>

            <Route path='dashboard/add-doctors' element={<AddDoctors/>}/>
            <Route path='dashboard/dosctors' element={<Doctors/>}/>
            <Route path='dashboard/users' element={<Users/>}/>
           

        </Routes>

        
    )
  }

export default Routers