import React,{useEffect} from 'react'
// import AllProduct from '../product-data'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col}  from 'react-bootstrap'
import { getAllProducts} from '../actions/productAction'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Error from '../components/Error'
import HeroPage from './HeroPage'
import Filters from '../components/Filters'


const HomeScreen = () => {
  const dispatch = useDispatch()
  const productstate = useSelector(state => state.getAllProductReducer )
  const { loading, products, error } =  productstate

  useEffect(() => {dispatch(getAllProducts())}, [dispatch])

  return (
    <div>
<Container>
  <div><div>
    <HeroPage/>
    </div>
    <h2 className='homescreen_title '>Our Popular Dishes</h2>
  </div>
  
  <div>

  {loading ? (
    <Loader/>
  )
  : error ? (
  <Error>Error while fetching products {error}</Error>
  ) : (
    <Row>
      <Filters/>
        { products.map(product => (
<Col md={4} key={product.name}>
    <Product product={product} />
</Col>
        ))}
    </Row>
  )

}
</div>
{/* <div> FOOTER</div> */}
{/* </div> */}
    
</Container>
    </div>
  )
}





export default HomeScreen