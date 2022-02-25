import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../footer/footer.scss'

function Footer() {
    return (
        <Container fluid className='footer-container'>
            <Row className='contactanos-container'>
                <h5>contactanos</h5>
            </Row>
            <Row className='redes-sociales-container justify-content-center'>
                <div className='redes-sociales'>
                    <i class="ri-facebook-fill"></i>
                </div>
                <div className='redes-sociales'>
                    <i class="ri-instagram-fill"></i>
                </div>
                <div className='redes-sociales'>
                    <i class="ri-twitter-fill"></i>
                </div>
            </Row>
            <Row className='copyright-container'>
                <p><i class="ri-copyright-line"></i> Copyright 2022 | Alerta Bihotza</p>
            </Row>
        </Container>
    )
}

export default Footer