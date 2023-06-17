import { Route,Routes,Navigate } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Specialties from '../pages/Specialties'
import Register from '../pages/Register';
import Dashboard from '../admin/Dashboard';
import HistorialUser from '../pages/HistorialUser';


import Users from '../admin/Users';
import Doctors from '../admin/Doctors';
import AddDoctors from '../admin/AddDoctors';
import StaffMedico from './../pages/StaffMedico';
import DashboarDoc from '../Doctor/DashboarDoc.jsx';
import HistorialMed from '../Doctor/HistorialMed';


const Routers = () => {
    return (
        <Routes>

            <Route path='/' element={<Navigate to='home'/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='Staff' element={<StaffMedico/>}/>
            <Route path='historial' element={<HistorialUser/>}/>

            <Route path='specialties' element={<Specialties/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            

         
            <Route path='dashboard' element={<Dashboard/>}/>

            <Route path='dashboard/add-doctors' element={<AddDoctors/>}/>
            <Route path='dashboard/dosctors' element={<Doctors/>}/>
            <Route path='dashboard/users' element={<Users/>}/>


            <Route path='dashboardoc' element={<DashboarDoc/>}/>
            <Route path='dashboardoc/HistorialMed' element={<HistorialMed/>}/>
           

        </Routes>

        
    )
  }

export default Routers