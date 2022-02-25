import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { IMAGES_FEATURED_PRODUCTS } from '../../constants/images'
import '../productosDestacados/productosDestacados.scss'

function ProductosDestacados() {
  return (
    <Container fluid className='productos-destacados-container justify-content-center'>
      <Row className='productos-destacados-row'>
        <h3>Productos Destacados</h3>
        {
          IMAGES_FEATURED_PRODUCTS && IMAGES_FEATURED_PRODUCTS.map((image) =>
            <Col key = {  image.id } className= "col-card">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ image.url } />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        }
      </Row>
    </Container>
  )
}

export default ProductosDestacados