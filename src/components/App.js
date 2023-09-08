import React, { Fragment } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
import StarEssentials from './StarEssentials'
import AboutUs from './AboutUs'
import Feedback from './Feedback'


const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='StarEssentials' element={<StarEssentials/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='Feedback' element={<Feedback/>}/>
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App