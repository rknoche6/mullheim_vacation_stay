import React, { useState } from "react";
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SignupElements'
import auth from './../../auth'
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email: email, username: username, password: password };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let authenticate = await response.json().then((data) => data);
      if (authenticate === "Failed") {
        setError(true)
      } else {
        auth.signIn(() => {
          props.history.push("/home");
        });
        props.auth(true)
        props.username(username)
      }
    } catch (error) {
      console.error(error.message);

    }

  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Mullheim Vacation Home</Icon>
          <FormContent >
          {error &&
            <Alert variant={"danger"}>
              That username or email already has an account
            </Alert>}
            <Form onSubmit={onSubmitForm}>
              <FormH1>Create your account</FormH1>
              <FormLabel htmlFor='for' value={username}>Username</FormLabel>
                <FormInput htmlFor='email' required onChange={(event) => setUsername(event.target.value)}/>
              <FormLabel htmlFor='for' value={email}>Email</FormLabel>
                <FormInput htmlFor='email' required onChange={(event) => setEmail(event.target.value)}/>
              <FormLabel htmlFor='for' value={password}>Password</FormLabel>
                <FormInput htmlFor='password' required onChange={(event) => setPassword(event.target.value)}/>
              <FormButton type='submit'>Continue</FormButton>
              <Link to="/signin">
                <FormButton type='submit'>Already have an account? Click here to sign in!</FormButton>
              </Link>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp