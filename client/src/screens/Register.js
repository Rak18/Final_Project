import React,{useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../actions/userAction'
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";
import "./Register.css"
import { Link } from "react-router-dom"
const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerState = useSelector((state) => state.registerUserReducer);
    const { error, success, loading } = registerState;
    console.log("vvvv");
    const dispatch = useDispatch()

    const registerhandler = () => {
        if (password !== confirmPassword) {
          alert("Password do not match");
        } else {
          const user = { name, email, password, confirmPassword };
          dispatch(registerUser(user));
        }
      };

  return (
    <div  className="register-screen">
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="Somthing went wrong" />}
        <Form className="register-screen__form">
          <h1  className="register-screen__title">Registration </h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          
          <Button variant="primary" onClick={registerhandler}>
            Register
          </Button>
          
        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
        </Form>

    </div>
  )
}

export default Register