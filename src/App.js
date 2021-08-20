//import useState & useEffect here
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Welcome from "./Welcome";
import GuestGreeting from "./GuestGreeting";

function App() {
  const [state, setState] = useState({
    isLogin: false,
    user: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    console.log("App COmponent didMount");
    if (state.user.email) {
      console.log("App Component did update");
      console.log("state", state);
    }

    return () => {
      console.log("App Component will unmount");
    };
  }, []);

 const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  // Create DidMount with useEffect inside it can print "App Component Did Mount" & state value here

  // Create DidUpdate with useEffect inside it can print "App Component Did Update" & state value here

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    setState({
      isLogin: true,
      user: {
        email,
        password,
      },
    });
  };

  return (
    <>
      {state.isLogin ? (
        <Welcome />
      ) : (
        <>
          <GuestGreeting />
          <Container>
            <Row className="d-flex justify-content-center mt-5">
              <Col md="4">
                <Form onSubmit={handleOnSubmit}>
                  <div className="text-center h5">Login</div>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      size="sm"
                      type="email"
                      onChange={handleChange}
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      id="password"
                      name="password"
                      size="sm"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" size="sm">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
