import React from 'react'
import lg from './loading.gif'
import '../App.css';

const Spinner =() =>{

  
    return (
      <div>
        <img src={lg} alt="lg" className="spinner-img" />
      </div>
    )
  }


export default Spinner