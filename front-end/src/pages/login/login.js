import React, { useState } from 'react'
import logo from '../../assets/sg3l.jpg'
import LoginRegistro from '../../components/LoginRegistro/LoginRegistro'
import LoginEntrar from '../../components/LoginEntrar/LoginEntrar'
import styled from "styled-components";
import AccountBox from "../../components/accountBox"
import "./Login.scss"

export default function Login(){
  return (

    <>
      <div className='login-container'>
        <div className='image-container'>
          <img src={logo} alt="logo"/>
        </div>
        <LoginRegistro />
      </div>
    </>
  )
}