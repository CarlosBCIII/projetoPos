import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.scss"

function Home() {
  return (
    <div>
      <Navbar />
        <h1><p>home</p></h1>
        <FontAwesomeIcon icon="fa-solid fa-chart-line" />
        <FontAwesomeIcon icon="fa-solid fa-chart-line" />

    </div>
  )
}

export default Home