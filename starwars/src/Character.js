import React from 'react';
import {
    Col, Row, Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

function Character({ name, height, mass, skinColor }) {
    return(
        <Col sm="4">
          <Row>
             <Card style={{ margin: "50px" }}>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{skinColor}</CardSubtitle>
                    <CardText>
                        Height: {height}
                            <br/>
                        Mass: {mass}
                    </CardText>
                </CardBody>
            </Card>
          </Row>
        </Col>
    );
}

export default Character;