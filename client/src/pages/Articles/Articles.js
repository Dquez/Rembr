import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import {getArticles} from "../../actions";
import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import SearchBar from "../../components/Search";
import Particles from 'react-particles-js';
import particlesConfig from "./particlesConfig.json";
// import Filter from "../../components/Filter";
import Search from "../../utils/Search";
import {getUserInfo} from '../../utils/AuthService'; 
import {isLoggedIn } from '../../utils/AuthService';
import "./article.css";


class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      email: "",
      search: "",
      keywordArticles : [],
    };
  }

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    // callback function to retrieve the user's email from the AuthService file
    getUserInfo(email=> {
      this.setState({email});
      this.props.getArticles(email)
    }) 
  }
  
  componentWillReceiveProps() {
    this.props.getArticles(this.state.email);
  }

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
        keywordArticles : Search.keywordSearch(this.props.articles, value)
    });
  };

  renderArticles = (articles, type) => {
    return (
      <List>
        <h3 style={{textAlign:"center"}}>{type}</h3>
        {articles.map(article => {
        return (         
            <ListItem 
              key={article._id} 
              article={article} 
              handleTagChange={this.handleTagChange} 
              handleSubmit={this.handleSubmit}
              type={type}
            >
            </ListItem>
          );
      })}
    </List>

    )
    
  }

  render() {
    const {articles} = this.props; 
  
    const priority = _.filter(articles, article=> !article.saveForLater);
    const backlog = _.filter(articles, article=> article.saveForLater);      
    return (
      <Container fluid>
        <Row>
          <Col styleProp="side-bar" size="md-2">
            <Nav/>
          </Col>
          <Col styleProp="main" size="md-10 sm-12">
          <Particles style={{position:"absolute"}} params={particlesConfig}/>
          <Banner/>
            <Row>
            {!isLoggedIn() && 
            <Col size="md-12"> <h3 className="text-center">Please log in to view your articles.</h3> 
            </Col>}
            {_.size(articles) === 0 && isLoggedIn() ? 
            <Col size="md-12"><h3 className="text-center">Please save articles using the extension to view them here.</h3>
            </Col> : ""}
            {isLoggedIn() && _.size(articles) > 0 ?
             <div>
              <Col styleProp="left-articles" size="md-4">
                {priority.length ? this.renderArticles(priority, "Priority") : 
                  // if there are no articles in the priority array, display a standalone h3 element
                <h3 style={{textAlign:"center"}}>Priority</h3>}
              </Col>
              <Col styleProp="mid-articles" size="md-4">
                {backlog.length ?  this.renderArticles(backlog, "Backlog") :
                  // if there are no articles in the backlog array, display a standalone h3 element
                <h3 style={{textAlign:"center"}}>Nothing on backlog yet</h3>}
              </Col>
              <Col styleProp="right-articles" size="md-4">
                <SearchBar style={{width:"100%", clear:"both"}} value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Search for a keyword..." 
                  />
                {/* <Filter toggle={"dropdown"} style={{width:"50%"}}/> */}
                   {this.state.keywordArticles.length && this.state.search ? 
                      this.renderArticles(this.state.keywordArticles)
                    : ""}
                </Col>
              </div> : ""}
              </Row>
              
          </Col>
        </Row>
      </Container>
    );
  }
}


function mapStateToProps({articles}){
  return {articles};
}

// getArticles is a destructured methods, now hooked up to redux and available as props
export default connect(mapStateToProps, {getArticles})(Articles);