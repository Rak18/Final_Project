
import React,{useState} from 'react'
import {Card,Button, Row, Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction';


const Product = ({ product }) => {
    const [varient,setVarient] = useState('small')
    const [quantity,setQuantity] = useState(1)
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const addToCartHandler = () => {
      dispatch(addToCart(product,quantity, varient))
    }

    //function

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
<Card style={{ width: '20rem', marginTop:"15px"}}>
      <Card.Img variant="top" 
      src={product.imageUrl}
       style={{height: "180px", cursor:"pointer"}}
       onClick={handleShow}
       />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title> <hr/>

        <Card.Text>
          <Row>
             <Col md={6}>
<h6>Varients</h6>
<select value = {varient} onChange={e => setVarient(e.target.value)} >
    {product.varients.map((varient) => (
        <option >{varient}</option>
    ))}
</select>
            </Col>
            <Col md={6}>
<h6>Quantity</h6>
<select value = {quantity} onChange={e => setQuantity(e.target.value)} >
   {[...Array(15).keys()].map((v,i) => (
    <option value={i+1}>
        {i+1}
        </option>
   ))}
</select>
            </Col>
          </Row>
        </Card.Text>
       <Row>
        <Col md={6}>Price : {product.prices[0][varient] * quantity } /-Rs</Col>
        <Col md={6}>
            <Button 
               onClick={addToCartHandler}
            className="bg-warning text-white">
              Add To Cart</Button>
        </Col>
       </Row>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <Card.Img variant="top" 
      src={product.imageUrl}
       style={{height: "180px"}}
       />
            </div>
            <div>
                <h5>Description</h5>
                <h6>{product.description}</h6>
            </div>
        </Modal.Body>
      </Modal>

    </>
  );
}
  
  
export default Product


// // import React from "react";
// // import "./Product.css";
// // import { Link } from "react-router-dom";

// // const Product = ({ imageUrl, description, price, name, product }) => {
// //   return (
// //     <div className="product">
// //       <img src={imageUrl} alt={name} />

// //       <div className="product__info">
// //         <p className="info__name">{name}</p>

// //         <div className="price_desc">
// //           <p className="info__description">
// //             {description.substring(0, 100)}...
// //           </p>

// //           <p className="info__price">₹/-{price}</p>
// //         </div>

// //         <Link to={`/product/${product}`} className="info__button">
// //           View
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Product;




