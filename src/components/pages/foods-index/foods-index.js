import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

import {Link} from 'react-router-dom'

class FoodsIndex extends Component {

    constructor(){
        super()
        this.state = { foods: undefined }
    }

    componentDidMount(){
        fetch('https://react-webinar.herokuapp.com/')
            .then(response => response.json())
            .then(foodsArray => this.setState({foods: foodsArray}))
            .catch(err => console.log(err))
    }


    render(){

        return (

            <Container>

                {
                !this.state.foods ? 

                    <h3>Cargando...</h3> 

                :
                    <>
                    <h1>Stock de alimentos</h1>
                    <p>Consulta los detalles de stock, precios y origen de nuesros alimentos.</p>

                    <Table bordered>
                        <tbody>
                            {this.state.foods.map(food => 
                            <tr key={food._id}>
                                <td>
                                    <img src={`/img/${food.img}`} alt={food.name}/>
                                </td>
                                <td>
                                    <p>{food.name}</p>
                                </td>
                                <td>
                                    <p>Precio: {food.price} € | Stock disponible: {food.stock} uds. 
                                    <Link to={`/alimento/${food._id}`} className="btn btn-sm btn-outline-dark">Ver detalles</Link></p>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                    </>
                }
            </Container>
        )
    }
}

export default FoodsIndex