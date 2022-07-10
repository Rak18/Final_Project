// import React from 'react'
// import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
// import { Routes, Route } from "react-router-dom";

// import {Navbar, Nav} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'

// // import { useSelector } from "react-redux";



// const AdminScreen = ({history}) => {
  
//   return (
//     <>

// <Container>
//         <Row>
//           <h1 className="text-center bg-success text-light p-4">Admin Panel</h1>
//           <Col md={2}>
//             <ButtonGroup vertical style={{ minHeight: "500px" }}>
//               <Button onClick={() => history.push("/admin/userlist")}>
//                 All Users
//               </Button>
//               <Button  onClick={() => history.push("/admin/productlist")}>
//                 All Products
//               </Button>
//               <Button  onClick={() => history.push("/admin/addnewproduct")}>
//                 Add New Product
//               </Button>
//               <Button  onClick={() => history.push("/admin/orderlist")} >
//                 All Orders
//               </Button>
//             </ButtonGroup>
//           </Col>
//           <Col md={10}>
//           </Col>
//         </Row>
//       </Container>

//     </>
//   )
// }

// export default AdminScreen



import React,{useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Admin Panel
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin/userlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem fab pulse icon="user">All Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/productlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">All Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/addnewproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user"> Add New Product</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/orderlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line"> All Orders</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Edit</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;










// <Navbar text-center bg="success" text-light p-4 expand="lg">
// <LinkContainer to="/admin">
// <Navbar.Brand>Admin Panel</Navbar.Brand>
// </LinkContainer>
// <Navbar.Toggle aria-controls="basic-navbar-nav" />
// <Navbar.Collapse id="basic-navbar-nav">
// <Nav className="mr-auto">
// <LinkContainer to="/service">
// <Nav.Link>Service</Nav.Link>
// </LinkContainer>
// <LinkContainer to="/about">
// <Nav.Link>About</Nav.Link>
// </LinkContainer>
// </Nav>
// </Navbar.Collapse>
// </Navbar>
// )
// }


// export default AdminScreen 









