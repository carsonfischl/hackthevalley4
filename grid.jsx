import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {
    Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';
import brca1 from './brca1.jpg';
import brca2 from './brca2.jpg';
import tardbp from './tardbp.jpg';
import hemo from './hemoglobin.jpg';
import xpd from './xpd.jpg';
import cf from './cystic.jpg';

class ProteinCard extends Component{
    render() {
      return (
        <div>
        <Card-transparent>
          <CardImg top width="100%" src={this.props.pic} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.protName}</CardTitle>
            <CardSubtitle>Properties</CardSubtitle>
            <CardText>{this.props.associations}</CardText>
            <Button>{this.props.link}</Button>
          </CardBody>
        </Card-transparent>
      </div>
      );
    }
  }

class Grid extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <ProteinCard protName='BRCA2' associations='breast cancer' link='Click Here to Learn More' image='brca2.jpg'/>
                    </Col>
                    <Col>
                        <ProteinCard protName='TARDBP' associations='Dementia' link='Click Here to Learn More' image='/tardbp.jpg'/>
                    </Col>
                    <Col>
                        <ProteinCard protName='BRCA1' associations='Breast Cancer' link='Click Here to Learn More' pic={brca2}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Grid;