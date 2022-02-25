import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../banner/bannerSuperior.scss'

function BannerSuperior() {
  return (
    <>
            <Container fluid className='banner-container'>

                <Row className='banner-wrapper'>
                    <h2>Más de una década trabajando con los mejores músicos argentinos</h2>
                </Row>

            </Container>
        </>
  )
}

export default BannerSuperior