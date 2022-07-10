import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";
import {useDispatch, useSelector } from 'react-redux'
import { getProductById, updateProduct } from "../../actions/productAction"
// import Loader from "./../Loader";
// import Error from "./../Error";
// import Success from "./../Success";


const EditProduct = ({ match }) => {

  const [name, setname] = useState("raktim");
  const [smallPrice, setsmallPrice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  // const [imageUrl, setimageUrl] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const dispatch = useDispatch()

  // const getProductByState = useSelector((state) => state.getProductByIdReducer);
  // const { loading, error, product } = getProductByState;

  //const updateProductState = useSelector((state) => state. updateProductByIdReducer)
  // const { updateloading, updateerror, updatesuccess } = updateProductState;



// useEffect(() => {
//   if (product) {
//     if (product._id === match.params.productId) {
//       setname(product.name);
//       setdescription(product.description);
//       setcategory(product.category);
//       // setimage(product.image);
//       setsmallPrice(product.prices[0]["small"]);
//       setmediumPrice(product.prices[0]["medium"]);
//       setlargeprice(product.prices[0]["large"]);
//     } else {
//       dispatch(getProductById(match.params.productId));
//     }
//   } else {
//     dispatch(getProductById(match.params.productId));
//   }
// }, [product, dispatch, match.params.productId]);


const submitForm = (e) => {
  
  //prevent from accidental refresh of page on submit
  e.preventDefault();

  const updatedproduct = {
    _id: match.params.productId,
    name,
    image,
    // imageUrl,
    description,
    category,
    prices: {
      small: smallPrice,
      medium: mediumPrice,
      large: largeprice,
    }, 
  };
// console.log(product)
dispatch(updateProduct( updatedproduct))
};

  return (
    <div>
    {/* {updateloading && <Loader/>}
   {error && <Error error="add new product error" />} */}
   {/* {success && <Success success="Product Added Successfully" />} */}
   <Form onSubmit={submitForm} className="bg-light p-4">
     <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control
           type="text"
           value={name}
           onChange={(e) => setname(e.target.value)}
           placeholder="Enter name"
         />
       </Form.Group>
       <Row className="mb-3 mt-3">
         <Form.Group as={Col} controlId="formGridCity">
           <Form.Label>Small Price</Form.Label>
           <Form.Control
             type="text"
             value={smallPrice}
             onChange={(e) => setsmallPrice(e.target.value)}
             placeholder="Enter Small Price"
           />
         </Form.Group>

         <Form.Group as={Col} controlId="formGridState">
           <Form.Label>Medium Price</Form.Label>
           <Form.Control
             type="text"
             value={mediumPrice}
             onChange={(e) => setmediumPrice(e.target.value)}
             placeholder="Enter medium price"
           />
         </Form.Group>

         <Form.Group as={Col} controlId="formGridZip">
           <Form.Label>Large Price</Form.Label>
           <Form.Control
             type="text"
             value={largeprice}
             onChange={(e) => setlargeprice(e.target.value)}
             placeholder="Enter large price"
           />
         </Form.Group>
       </Row>
       <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Image</Form.Label>
         <Form.Control
           type="text"
           value={image}
           // value={image}
           onChange={(e) => setimage(e.target.value)}
           placeholder="Add Image URL"
         />
       </Form.Group>
     </Row>

     <Form.Group className="mb-3" controlId="formGridAddress1">
       <Form.Label>Description</Form.Label>
       <Form.Control
         type="text"
         value={description}
         onChange={(e) => setdescription(e.target.value)}
         placeholder="Enter Description"
       />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formGridAddress2">
       <Form.Label>Category</Form.Label>
       <Form.Control
         type="text"
         value={category}
         onChange={(e) => setcategory(e.target.value)}
         placeholder="Enter Category"
       />
     </Form.Group>

     <Button variant="primary" type='submit'>
   Update 
     </Button>
   </Form>
 </div>
  )
}

export default EditProduct