import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
class NoMatch extends React.Component {
  render() {

    return (
      <Container fluid>
        <Row>
        <Col styleProp="side-bar" size="md-2">
          <Nav/>
          </Col>
          <Col styleProp="main" size="md-10">
          
            <Banner/>
            <h1>404 Page Not Found</h1>
              <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </span>
              </h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NoMatch;
