import React  from 'react';
import { Col, Row, Card, CardGroup } from "react-bootstrap";
import { UserListData, UserObj } from '../interfaces/interfaces';

const CardList = (props: UserListData) => {
    const users: [UserObj] = props.users

    return (
        <Row>
            {users.map((user: UserObj) => {
                return <Col key={user.name}> <CardGroup><Card style={{  marginBottom:'2rem', minWidth:'15rem', minHeight:'5rem' }}>
                    <Card.Body>
                        <Card.Title style={{fontSize:'14px'}}>{user.name}</Card.Title>
                        <Card.Text style={{fontSize:'10px'}}>
                            {user.address}
                        </Card.Text>
                    </Card.Body>
                </Card> </CardGroup></Col>
            })

            }
        </Row>

    )
}

export default CardList