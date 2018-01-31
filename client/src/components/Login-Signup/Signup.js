import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to="/login">Already have an acount? Click here to login!</Link>
        </div>
      );
    }
  }

  export default Signup;