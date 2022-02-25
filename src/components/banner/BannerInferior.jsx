import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../banner/bannerInferior.scss'

function BannerInferior() {
  return (
    <Container className='banner-container-inferior'>
        <Row className='justify-content-center'>
            <div className='banner-inferior'>
                <h2>100% hecho a mano</h2>
                <h4>Cuidando hasta el mínimo detalle</h4>
            </div>
        </Row>
    </Container>
  )
}

export default BannerInferior