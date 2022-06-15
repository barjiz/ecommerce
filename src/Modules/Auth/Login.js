import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Header/Header'

import { Password, Text } from '../../Components/Input/Input'
import { H2, H3, H5 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { BASE_URL } from '../../url'


import "./Auth.css"

export const Login = () => {



  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = async () => {

    const { data } = await axios.post(
      `${BASE_URL}user/login`,
      {
        email,
        password,
      },
    );

    localStorage.setItem("authToken", data.token);


    navigate('/')

    window.location.reload()

  };

  const [hide, setHide] = useState(true)

  return (

    <div className='auth'>

      <div className='auth_container'>

        <Header position="fixed">

          <i onClick={() => navigate('/')} class="fa-solid fa-close"></i>

        </Header>

        <i onClick={() => navigate('/')} class="fa-solid fa-close close_auth"></i>

        <H2 color="#7B68EE" margin="20px 0">Login</H2>

        <Text placeholder="Enter your Email"
          type="email" onChange={(e) => setEmail(e.target.value)} />


        <Password placeholder="Password"
          type={hide ? "password" : "text"} onChange={(e) => setPassword(e.target.value)}
          onClick={() => setHide(!hide)} icon={hide ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
        />


        <Button color="primary" width="100%" onClick={onSubmit} margin="30px 0">Login</Button>



        <Flex width="100%" justifyContent="center">

          <H5 textTransform="inherit">Create an account?</H5>

          <H5 fontWeight="bold" cursor="pointer" margin="0 7px" color="#7B68EE" onClick={() => navigate('/signup')}>Sign Up</H5>

        </Flex>


      </div >

    </div >

  )
}
