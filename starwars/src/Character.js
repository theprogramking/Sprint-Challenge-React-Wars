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
                    <CardTitle><h2>{name}</h2></CardTitle>
                    <CardSubtitle><i>{skinColor}</i></CardSubtitle>
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