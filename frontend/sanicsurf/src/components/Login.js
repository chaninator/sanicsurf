import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup} from 'react-bootstrap';

class Login extends Component {

  constructor(props){
  super(props);
  this.state = {
    Username: '',
    password: ''
  }
}

  login(){
    console.log('LOGGING JOGGING', this.state);
  }

  render(){
    return(
      <div>

      <FormGroup>
          <InputGroup>

            <FormControl
            type='text'
            placeholder='Username'
            value={this.state.Username}
            onChange={event => {this.setState({Username: event.target.value})}}

            />

            <FormControl
            type='text'
            placeholder='Password'
            value={this.state.password}
            onChange={event => {this.setState({password: event.target.value})}}

            />
          </InputGroup>


        </FormGroup>

        <button onClick={()=> this.login()}>
          Login
        </button>


      

      </div>

    )
  }
}

export default Login;
