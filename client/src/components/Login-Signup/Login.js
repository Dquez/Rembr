import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "",
        email: "",
        password: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const {name, value} = event.target;
      this.setState({[name]: value});
    }
  
    handleSubmit(event) {
      console.log("SUBMITTED");
      // alert('A name was submitted: ' + this.state.value);
      API.postArticle({
        email: this.state.email,
        password: this.state.password
      })
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" onClick={this.handleSubmit} value="Submit"/>
        </form>
        <Link to="/signup">Don't have an acount? Signing up is super easy!</Link>
        </div>
      );
    }
  }

  export default Login;