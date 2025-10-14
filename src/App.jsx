import Navlinks from './Componets/Navlinks'
import Hero from './Componets/Hero'
import Aboutsection from './Componets/Aboutsection'
import Companysection from './Componets/Companysection'
import Servicesection from './Componets/Servicesection'
import Contactsection from './Componets/Contactsection'
import Footersection from './Componets/Footersection'
import React from 'react'

const App = () => {
  return (
    <div>
      <Navlinks/>
      <Hero/>
      <Aboutsection/>
      <Companysection/>
      <Servicesection/>
      <Contactsection/>
      <Footersection/>
    </div>
  )
}

export default App
