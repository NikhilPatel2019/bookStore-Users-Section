import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/formContainer';
import axios from 'axios'

const LoginScreen = (  ) => {
    let navigate = useNavigate();

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const userInfo = localStorage.getItem('userInfo');

    useEffect(() => {
        //This is force redirect
      if(userInfo){
            navigate('/userhome');
            } 
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submit Called")
        const loginDetails = {
            'email': email,
            'password': password
         }

         if(password && email){
         axios.post('http://localhost:9090/user/login', loginDetails)
         .then( response => {
             console.log(response);
             if(response.status === 200){
                 localStorage.setItem('userInfo', JSON.stringify(response.data))
                 navigate('/userhome');                 
             }
         })
        }
    }

    return(
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter Email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Enter Password'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>Submit</Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New User? <Link to={`/signup`}> Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen;