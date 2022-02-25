import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../instrumentos/instrumentos.scss'

function Instrumentos() {
    return (
        <>
            <Container className='instrumentos-container'>
                <Row className='instrumentos-row justify-content-center'>
                    <Col className='instrumento-col' sm={5} xl={3}>
                        <div className="instrumento">
                            <img src="http://thepenguinsreeds.com/wp-content/uploads/2021/04/saxo.png" alt="" />
                            <h3 className="titulo-container-instrumento">Accesorios <br/> para Saxofón</h3>
                        </div>
                    </Col>
                    <Col className='instrumento-col' sm={5} xl={3}>
                        <div className="instrumento">
                            <img src="http://thepenguinsreeds.com/wp-content/uploads/2021/04/clarinete.png" alt="" />
                            <h3 className="titulo-container-instrumento">Accesorios <br/> para Clarinete</h3>
                        </div>
                    </Col>
                    <Col className='instrumento-col' sm={5} xl={3}>
                        <div className="instrumento">
                            <img src="http://thepenguinsreeds.com/wp-content/uploads/2021/04/fagot.png" alt="" />
                            <h3 className="titulo-container-instrumento">Accesorios <br/> para Fagot</h3>
                        </div>
                    </Col>
                    <Col className='instrumento-col' sm={5} xl={3}>
                        <div className="instrumento">
                            <img src="http://thepenguinsreeds.com/wp-content/uploads/2021/04/oboe.png" alt="" />
                            <h3 className="titulo-container-instrumento">Accesorios <br/> para Oboe</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Instrumentos