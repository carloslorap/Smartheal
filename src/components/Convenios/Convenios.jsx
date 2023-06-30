import React from 'react'
import inter from '../../assets/Rectangle 46.png'
import hanco from '../../assets/Rectangle 43.png'
import rimac from '../../assets/Rectangle 44.png'
import mafre from '../../assets/Rectangle 45.png'

const Convenios = () => {
  return (
    <section>

    <div className='content-services'>
      <h1 className='title-services'>Nuestro Servicios</h1>
      <div className='content-img'>
        <img src={hanco} alt=''className='img-3'/>
        <img src={rimac}alt='' className='img-1'/>
        <img src={mafre} alt=''className='img-2'/>
        <img src={inter} alt=''className='img-4'/>
      </div>
    </div>

  </section>
  )
}

export default Convenios