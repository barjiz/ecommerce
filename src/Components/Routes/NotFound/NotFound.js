import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Button/Button'
import { H1, H2, H3 } from '../../Text/Text'
import { Flex } from '../../UI/Flex/Flex'

export const NotFound = () => {

    const navigate = useNavigate()


    return (
        <div style={{
            width: '100%',
            position: 'fixed',
            backgroundColor: 'white',
            zIndex: '100',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '0',
            left: '0'
        }}>

            <Flex flexDirection="column">

                <H1>404</H1>

                <H3>Page Not Found</H3>

                <Button onClick={() => navigate("/")} margin="30px" color="primary">Back To Home</Button>

            </Flex>


        </div>
    )
}
