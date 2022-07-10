import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiTwotoneEdit, AiFillDelete} from 'react-icons/ai'
import { Container, Table }  from 'react-bootstrap'
import { getAllProducts, deleteProduct } from '../../actions/productAction'
// import Product from '../../components/Product'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { Link} from 'react-router-dom'

const Productslist = () => {
  const dispatch = useDispatch()
  const productstate = useSelector(state => state.getAllProductReducer )
  const { loading, products, error } =  productstate

  useEffect(() => {dispatch(getAllProducts())}, [dispatch])
  return (
    <>
   <Container>
  {loading ? (
    <Loader/>
  )
  : error ? (
  <Error>Error while fetching products {error}</Error>
  ) : (
   <div>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>S/n</th>
          <th>Product Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map(product => (
            <tr>
              <td><img src={product.imageUrl} alt="logo" width="100px" height="80px" /></td>
              <td>{product.name}</td>
              <td>small :{product.prices[0]['small']}
              <br/>
              Medium :{product.prices[0]['medium']}
              <br/>
              Large :{product.prices[0]['large']}
              </td>
              <td>{product.category}</td>
              <td>
                <Link to={`/admin/editproduct/${product._id}`}>
                <AiTwotoneEdit style={{cursor: "pointer"}}/> 
                </Link>
                &nbsp;
            
                <AiFillDelete
                 style={{ color: "red", cursor: "pointer" }}
                 onClick={() => {
                   dispatch(deleteProduct(product._id));
                 }}
                 />
             
                </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
   </div>
  )}

</Container>
    </>
  )
}

export default Productslist