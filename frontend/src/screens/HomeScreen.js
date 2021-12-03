import React, { useState , useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product.js'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
   const fetchProducts = async () =>{
     const {data} = await axios.get('/api/products')

     setProducts(data)
   }
   fetchProducts()
  },[])
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
