import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CondRenderingArrayMapping() {
    const [age, setAge] = useState(10)
    const [users, setUsers] = useState([
        {"firstName": "Maria", "lastName": "Hanna"},
        {"firstName": "Frank", "lastName": "Doe"},
    ])
    return (
        <div>
            <h1>Conditional Rendering & Array Mapping</h1>
            <div className='conditional'>
                { age < 18? 
                    <h2> You are a minor! {age}</h2> 
                    : <h2> You are an adult! {age}</h2> 
                }
            </div>
            <Container fluid>
                <Row>
                    <Col>
                        <Table
                            striped
                            bordered
                            hover
                            responsive
                            style={{ width: '100%' }}
                        >
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                users.map(user => {
                                    return (
                                        <tr>
                                            <td> { user.firstName } </td>
                                            <td> { user.lastName } </td>
                                        </tr>
                                    )
                                })
                               }
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
