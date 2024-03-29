import React from 'react'
import "./NavBar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser} from '../actions/userAction'

const NavBar = () => {
  const dispatch = useDispatch()
  const cartState = useSelector(state => state.cartReducer )
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <>
         <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <div className='navbar_logo'>
   <LinkContainer to='/' >
            <h2>JOLDIE  <span>FOOD</span></h2> 
        </LinkContainer> 
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            { 
            currentUser ? ( <LinkContainer to='/'>
            {/* <Nav.Link>{ currentUser.name }</Nav.Link> */}
            <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
            </LinkContainer>) : 
             ( 
             <>
             <LinkContainer to="/login">
                    <Nav.Link className='login_btn'>Login</Nav.Link>
             </LinkContainer>
             <LinkContainer to="/register">
             <Nav.Link>Register</Nav.Link>
             </LinkContainer> </>)
            }
         

          <LinkContainer to="/cart" >
         
          <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
          
          </LinkContainer>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  )
        
}

export default NavBar