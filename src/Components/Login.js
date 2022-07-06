import React, { Component } from 'react';

class Login extends Component {
    state={
        username:'',
        pwd:''
    }
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
    }
  render() {
    return (
        <div>
          <div className='card mx-auto mt-5 justify-content-center' style={{width: "50%"}} >
          <div className='row'>
              <div className='col-12'>
                  <h4 className='p-5'><b>Login</b></h4>
                  <form onSubmit>  
                      
                      <div className='form-group row m-3'>
                          <label for="username" class="col-sm-2 col-form-label col-form-label-sm" ><b>Username</b></label>
                          <div className='col-sm-6'>
                              <input type="text" id="username" name = 'username' placeholder="Enter Username" required onChange={this.handleChange} />
                              <div className="invalid-feedback"> Please enter Username </div>
                          </div>
                      </div>

                      <div className='form-group row m-3'>
                          <label for="password" class="col-sm-2 col-form-label col-form-label-sm" ><b>Password</b></label>
                          <div className='col-sm-6'>
                              <input type="password" id='pwd' name='password' placeholder="Enter Password" required onChange={this.handleChange} />
                              <div className="invalid-feedback"> Please Provide Password </div>
                         </div>
                     </div>


                      <button className="btn btn-dark m-5" type="submit" onSubmit={this.handleSubmit} style={{backgroundColor:'#70718D'}}>Log In</button>
                  </form>

                  <p> Need an Account? </p>
                  <p><span className='line'><a href='./patientregistration'><b>Click here to Register as patient </b></a></span></p>
                  <p><span className='line'><a href='./doctorregistration'><b>Click here to Register as doctor </b></a></span></p>

              </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Login ;