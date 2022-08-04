import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Link to="/ProductDetail"><h2>Product Detail</h2></Link> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home 