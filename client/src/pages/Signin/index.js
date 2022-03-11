import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'
import { useState } from "react";
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";
import auth from '../../auth';

const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { password: password };
      const response = await fetch(`http://localhost:5000/users/${username}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      let authenticate = await response.json().then((data) => data);
      if (authenticate === true) {
        auth.signIn(() => {
          props.history.push("/home")
        });
        props.auth(true)
        props.username(username)
      } else {
        setError(true)
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Mullheim Vacation Home</Icon>
          {error &&
            <Alert variant={"danger"}>
              Invalid username or password, please check and try again
            </Alert>}
          <FormContent>
            <Form onSubmit={onSubmitForm}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for' >Username</FormLabel>
                <FormInput htmlFor='email' required onChange={(event) => setUsername(event.target.value)}/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required onChange={(event) => setPassword(event.target.value)}/>
              <FormButton type='submit'>Continue</FormButton>
              <Link to="/signup">
                <FormButton type='submit'>Don't have an account? Click here to sign up</FormButton>
              </Link>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
