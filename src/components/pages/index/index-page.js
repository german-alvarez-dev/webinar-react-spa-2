import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const IndexPage = () => {
    return (
        <Container className="index-page">
            <header>
                <h1>FeedMe!</h1>
                <p>Una sencilla SPA de alimentación</p>
                <Link className="btn btn-dark btn-outline btn-sm" to="/alimentos">Ver alimentos</Link>
            </header>
        </Container>
    )
}

export default IndexPage