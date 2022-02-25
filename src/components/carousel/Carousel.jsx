import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { IMAGES_CAROUSEL } from '../../constants/images'
import '../carousel/carousel.scss'

function Slider() {
    return (
        <Container className='container-carousel'>

            <div className="title-container">
                <h1>Experiencia<span>,</span> diseño y calidad<span>.</span></h1>
                <h3>Encontramos soluciones a las necesidades de nuestros colegas<span>.</span></h3>
            </div>

            <Carousel className='carousel'>
                {
                    IMAGES_CAROUSEL && IMAGES_CAROUSEL.map((image) =>

                        <Carousel.Item className='item-carousel' key={image.id}>
                            <img
                                className="d-block w-100 image-carousel"
                                src={image.url}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            </Carousel>

        </Container>

    )
}

export default Slider