import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { isLoggedIn, getIdToken, getAccessToken } from '../../utils/AuthService';
import { Link } from 'react-router-dom';
class NoMatch extends React.Component {

  componentDidMount() {
    // console.log(getIdToken());
    // console.log(getAccessToken());
  }

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>404 Page Not Found</h1>
              <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </span>
              </h1>
              {(isLoggedIn() ? 
              <div className="jumbotron text-center">
              <h2>View Your articles</h2>
              <Link className="btn btn-lg btn-success" to='/books'> Saved articles </Link>
            </div> : <div className="jumbotron text-center"><h2>Get Access to articles by logging in.</h2></div>
            )}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NoMatch;
