import React, {Component} from 'react'
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap'

import {Link} from 'react-router-dom'

class FoodsIndex extends Component {

    constructor(props){
        super(props)
        this.state = { food: undefined }
    }

    componentDidMount(){

        const foodId = this.props.match.params.foodId
        
        fetch(`https://react-webinar.herokuapp.com/${foodId}`)
            .then(response => response.json())
            .then(foodDetails => this.setState({food: foodDetails}))
            .catch(err => console.log(err))
    }


    render(){

        return (
            <Container>

                {
                !this.state.food ? 

                    <h3>Cargando...</h3> 

                : 

                    <Row>
                        <Col md={{span: 4}}>
                            <h1>{this.state.food.name}</h1>
                            <img className="food-detail-img" src={`/img/${this.state.food.img}`}></img>
                        </Col>
                        <Col md={{span: 8}}>
                            <h2>Especificaciones</h2>
                            <p>{this.state.food.description}</p>
                            <hr></hr>
                            <p>Precio: {this.state.food.price} €</p>
                            {this.state.food.importTax && <p>Incluye impuesto de importación</p>}

                            <Tabs defaultActiveKey="Nutricional">
                                <Tab eventKey="Nutricional" title="Nutricional">
                                    <h3>Información nutricional</h3>
                                    <hr></hr>
                                    <p>Aporte nutricional por 100g:</p>
                                    <ul>
                                        <li>Calorías: {this.state.food.kcal}</li>
                                        <li>Proteínas: {this.state.food.protein}</li>
                                        <li>Grasas: {this.state.food.fat}</li>
                                        <li>Carbohidratos: {this.state.food.carbs}</li>
                                    </ul>
                                </Tab>
                                <Tab eventKey="Origen" title="Origen">
                                    <h3>Origen</h3>
                                    <hr></hr>
                                    <p>{this.state.food.name} procedente de:</p>
                                    <ul>
                                        {this.state.food.origin.map(elm=> <li>{elm}</li>)}
                                    </ul>
                                </Tab>
                                <Tab eventKey="Stock" title="Stock">
                                    <h3>Stock</h3>
                                    <hr></hr>
                                    <p>Stock actual: {this.state.food.stock} unidades en stock</p>   
                                </Tab>
                            </Tabs>
                            <Link to="/alimentos" className="btn btn-dark">Volver al índice</Link>
                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}

export default FoodsIndex