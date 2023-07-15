import React, { useState, useEffect } from 'react';
 import { BiSearch } from 'react-icons/bi';
import Select from 'react-select';
import { Link } from 'react-router-dom';
 import { FaStar, FaRegStar } from 'react-icons/fa';
import medicos from '../assets/nuestros-medicos.jpg';
import profile1 from '../assets/medic (1).png';

import '../style/staffm.css';

import 'react-tabs/style/react-tabs.css';


const profiles = [
  { id: 1, name: 'Antonio Garcia Garcia', location: 'S.J.L.', specialty: 'Medicina General', profileImage: profile1 },
  { id: 2, name: 'Nayib Elias Abuhadba Rodriguez', location: 'S.J.L.', specialty: 'Medicina Interna', profileImage: profile1 },
  { id: 3, name: 'Eduardo Manuel Acevedo Vásquez', location: 'S.J.L.', specialty: 'Ginecología y Obstetricia', profileImage: profile1 },
  { id: 4, name: 'Teresa Morcillo Molina', location: 'S.J.L.', specialty: 'Cardiología', profileImage: profile1 },
  { id: 5, name: 'Fernando Jose Alarcon Tebar', location: 'S.J.L.', specialty: 'Dermatología', profileImage: profile1 },
  { id: 6, name: 'Ruben Santiago Pardo Requena', location: 'S.J.L.', specialty: 'Neurología', profileImage: profile1 },
  { id: 7, name: 'Ramon Enrique Ortega Cano', location: 'S.J.L.', specialty: 'Urología', profileImage: profile1 },
  { id: 8, name: 'Alvaro Paul Corcoles Blazquez', location: 'S.J.L.', specialty: 'Psiquiatría', profileImage: profile1 },
  { id: 9, name: 'Ivan Adrian Rodenas Ballesteros', location: 'S.J.L.', specialty: 'Endocrinología', profileImage: profile1 },
  { id: 10, name: 'Ana María Abugattas Saba', location: 'S.J.L.', specialty: 'Pediatría', profileImage: profile1 },
  { id: 11, name: 'Lisbeth Gladys Acorda Sifuentes', location: 'S.J.L.', specialty: 'Otorrinolaringología', profileImage: profile1 },
];

const StaffMedico = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState(profiles);
  const [searchSpecialty, setSearchSpecialty] = useState(null);
  const [searchName, setSearchName] = useState('');
  useEffect(() => {
   
    profiles.forEach((profile) => {
      const storedRating = localStorage.getItem(`rating_${profile.id}`);
      if (storedRating) {
        profile.rating = parseInt(storedRating);
      } else {
        profile.rating = 0;
      }
    });
    setFilteredDoctors(profiles);
  }, []);

  const handleSearch = () => {
   
    console.log('Realizando búsqueda...');
    const filteredDoctors = profiles.filter((doctor) => {
      const nameMatch = doctor.name.toLowerCase().includes(searchName.toLowerCase());
      const specialtyMatch = searchSpecialty ? doctor.specialty === searchSpecialty.value : true;
      return nameMatch && specialtyMatch;
    });
    setFilteredDoctors(filteredDoctors);
  };
  
  const handleSpecialtySearch = () => {
    console.log('Realizando búsqueda por especialidad:', selectedSpecialty);
    const filteredDoctors = profiles.filter((doctor) => {
      const nameMatch = doctor.name.toLowerCase().includes(searchName.toLowerCase());
      const specialtyMatch = selectedSpecialty ? doctor.specialty === selectedSpecialty.value : true;
      return nameMatch && specialtyMatch;
    });
    setFilteredDoctors(filteredDoctors);
  };
  


  const handleSpecialtyChange = (selectedOption) => {
    setSelectedSpecialty(selectedOption);
  };
  



  const handleDoctorSearch = (event) => {
    const searchValue = event.target.value;
    if (searchValue === '') {
      setFilteredDoctors(profiles);
    } else {
      const filtered = profiles.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredDoctors(filtered);
    }
  };

  const specialtyOptions = [
    { value: 'Medicina General', label: 'Medicina General' },
    { value: 'Medicina Interna', label: 'Medicina Interna' },
    { value: 'gineyobs', label: 'Ginecología y Obstetricia' },
    { value: 'Ginecología y Obstetricia', label: 'Cardiología' },
    { value: 'Dermatología', label: 'Dermatología' },
    { value: 'Neurología', label: 'Neurología' },
    { value: 'Urología', label: 'Urología' },
    { value: 'Psiquiatría', label: 'Psiquiatría' },
    { value: 'Endocrinología', label: 'Endocrinología' },
    { value: 'Pediatría', label: 'Pediatría' },
    { value: 'Otorrinolaringología', label: 'Otorrinolaringología' },
  ];
  return (
    <div className="img-medicos">
      <img src={medicos} alt="Medicos" className="image" />

      <div className="form-card text-center">
        <div className="text-contact">
          <div className="message">
            <h1 className="escribenos">Siempre listos para cuidarte</h1>
          </div>
          <div className="form-description">
            <h5>Contamos con más de 20 profesionales en más de 10 especialidades</h5>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '100px' }}>
        <div
          style={{
            backgroundColor: '#071347f1',
            height: '75px',
            width: '70%',
            borderBottomLeftRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="description-container" style={{ margin: '0 100px' }}>
            <p className="description">Busca profesionales por nombre o especialidades</p>
          </div>
          <div className="search-container" style={{ margin: '0 80px', display: 'flex' }}>
            <div style={{ position: 'relative', height: '39px' }}>
              <input
                type="text"
                placeholder="Ingrese el nombre"
                style={{ width: '230px', marginRight: '40px', borderBottomLeftRadius: '15px', height: '100%' }}
                onChange={handleDoctorSearch}
              />
              <BiSearch className='search-icon' style={  
  {  position: 'absolute',
    top: '50%',
    right: '55px',
    transform: 'translateY(-50%)',
    cursor: 'pointer'}} onClick={handleSearch}/>

            </div>


            <div style={{ position: 'relative', width: '300px', height: '40px' }}>
         
            <Select
  options={specialtyOptions}
  value={selectedSpecialty}
  onChange={handleSpecialtyChange} 
  placeholder="Buscar especialidad"
  styles={{
    control: (provided) => ({
      ...provided,
      borderBottomLeftRadius: '15px',
      borderColor: '#ccc',
      height: '39px',
    }),
  }}
/>
<BiSearch className='search-icon' style={  
  {  position: 'absolute',
    top: '50%',
    right: '55px',
    transform: 'translateY(-50%)',
    cursor: 'pointer'}} onClick={handleSpecialtySearch}/>
 
</div>
          </div>
        </div>
      </div>

      
      <div className="doctor-list">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} profile={doctor} />
        ))}
      </div>
    </div>
  );
};

const DoctorCard = ({ profile }) => {
  const [rating, setRating] = useState(profile.rating || 0); 
  const [hoveredRating, setHoveredRating] = useState(0); 
  const handleRatingClick = (value) => {
   
    setRating(value);
    localStorage.setItem(`rating_${profile.id}`, value);
  };

  const handleContact = () => {
    console.log(`Contacting ${profile.name}`);
  
  };

  const handleRatingChange = (value) => {
    setRating(value);
    switch (value) {
      case 1:
        alert('Gracias por su calificación de 1 estrella, ¡prometemos mejorar!');
        break;
      case 2:
        alert('Gracias por su calificación de 2 estrellas, ¡prometemos mejorar!');
        break;
      case 3:
        alert('Gracias por su calificación de 3 estrellas, ¡prometemos mejorar!!');
        break;
      case 4:
        alert('Gracias por su calificación de 4 estrellas, ¡esperamos volver a verte!');
        break;
      case 5:
        alert('Gracias por su calificación de 4 estrellas, ¡esperamos volver a verte!');
        break;
      default:
        break;
    }
  };

  const handleRatingHover = (value) => {
    setHoveredRating(value);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-info">
        <div className="profile-image">
          <img src={profile.profileImage} alt="Doctor Profile" />
        </div>
        <div className="doctor-details">
          <p>{profile.specialty}</p>
          <h3 className="doctor-name">{profile.name}</h3>
          <p className="doctor-location">Sede: {profile.location}</p>
        </div>
      </div>
      <div className="contact-rating-section">
        <div className="contact-section">
          <Link to="/contact">
            <button className="contact-button" onClick={handleContact}>
              Conoce más aquí
            </button>
          </Link>
        </div>

        <div className="rating-section">
          <label>Valorar:</label>
          <div className="star-rating" onMouseLeave={handleRatingLeave}>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={hoveredRating >= value ? 'star active' : 'star'}
                onClick={() => handleRatingChange(value)}
                onMouseEnter={() => handleRatingHover(value)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                {value <= (hoveredRating || rating) ? <i className="ri-star-fill"></i> : <i className="ri-star-line"></i>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffMedico;