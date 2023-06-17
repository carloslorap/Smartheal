import React,{useState,useEffect} from 'react';
import { Container } from 'react-bootstrap'
import '../style/Hiatorial.css'
import axios from 'axios';
import hist from '../assets/hh.webp'

const HistorialUser = () => {

  const [userData, setUserData] = useState({});
  const [resultData, setResultData] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://smarth-user-service.up.railway.app/usuarios');
      const user = response.data.find(user => user.userid === 78102455);
      setUserData(user);
      
    } catch (error) {
      console.log(error);
    }
  };


  const fetchResultData = async () => {
    try {
      const response = await axios.get('https://smarth-resultdado-service.up.railway.app/resultado');
      const result = response.data.find(result => result.idResult === 1);
      setResultData(result);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchResultData()
  }, []);

  return (
    <Container>

     <div className='content_general'>
    <div className='content_his'>
        <h1 className='his_title'>Medical History</h1>

        <h4 className='his_subtitle'>Information of the Patiente</h4>
      
        <div className='his_label'>
          <label>Name:</label>
          <p className='his_date'>{userData.username}</p>
        </div>
        <div className='his_label'>
          <label>Lastname:</label>
          <p className='his_date'>{userData.lastname}</p>
        </div>
        <div className='his_label'>
          <label>Birthdate:</label>
          <p className='his_date'>{userData.birthdate}</p>
        </div>
        <div className='his_label'>
          <label>Phone:</label>
          <p className='his_date'>{userData.phone}</p>
        </div>

        <h4 className='his_subtitle'>Medical Results</h4>
        <div className='his_label'>
          <label>Name Medic:</label>
          <p className='his_date'>{resultData.nameMedic}</p>
        </div>
        <div className='his_label'>
          <label>Name Specialty:</label>
          <p className='his_date'>{resultData.nameSpecialty}</p>
        </div>
        <div className='his_label'>
          <label>Diagnosis:</label>
          <p className='his_date'>{resultData.diagnosis}</p>
        </div>
        <div className='his_label'>
          <label>Treatment:</label>
          <p className='his_date'>{resultData.treatment}</p>
        </div>
        <div className='his_label other'>
          <label>Recommendations:</label>
          <p className='his_date'>{resultData.recommendations}</p>
        </div>
        </div>
        <div className='content_img'>
          <img src={hist} alt='jef'/>
        </div>
      
      </div>
    </Container>
    
  )
}

export default HistorialUser