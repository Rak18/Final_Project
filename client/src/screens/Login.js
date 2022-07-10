import React,{useEffect, useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import "./Login.css"
import { Link } from "react-router-dom"
// import Loader from "../components/Loader";
// import Success from "../components/Success";
// import Error from "../components/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const loginState = useSelector((state) => state.loginUserReducer);
  //   const { error, success, loading } = loginState;

useEffect(() => {
  if (localStorage.getItem("currentUser")) {
    window.location.href = "/";
  }
}, [])

const loginHandler = () => {
  const user = { email, password };
  dispatch(loginUser(user));
};

  return (
    <div className="login-screen">
    {/* {loading && <Loader />}
        {success && <Success success="User Login Successfully" />}
        {error && <Error error="somthing went wrong" />} */}
        <Form  className="login-screen__form">
        <h1  className="login-screen__title">Login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </Form.Group>
          <Button variant="primary"  onClick={loginHandler}>
            Login
          </Button>
          <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
        </Form>
    </div>
  )
}

export default Login