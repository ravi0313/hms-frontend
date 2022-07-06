import React, { Component } from "react";

class PatientRegistration extends Component {
    render() {
    return (
        <div>
          <div className='card mx-auto mt-5 justify-content-center' style={{width: "50%"}} >
          <div className='row'>
              <div className='col-12'>
                  <h4 className='p-5'><b> Patient Registration</b></h4>
                  <form class="needs-validation" novalidate >
                      
                  <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>First Name</b></label>
                          <div className='col-sm-6'>
                              <input type="text" className="form-control form-control-sm" placeholder="Enter firstname" required/>
                              <div className="invalid-feedback"> Please enter firstname </div>
                          </div>
                      </div>

                  <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>Last Name</b></label>
                          <div className='col-sm-6'>
                              <input type="text" className="form-control form-control-sm" placeholder="Enter lastname" required/>
                              <div className="invalid-feedback"> Please enter lastname </div>
                          </div>
                 </div>
                      
                 <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>Gender</b></label>
                          <div className='col-sm-6'>
                          <select class="form-control form-control-sm" id="Gender" placeholder="select gender" required>
                                  <option>Select Gender</option>
                                  <option value={"Male"}>Male</option>
                                  <option value={"Female"}>Female</option>
                                  <option value={"Other"}>Other</option>
                              </select>
                            <div class="invalid-feedback"> Please Select Gender </div>
                          </div>
                 </div>


                  <div className='form-group row m-3'>
                          <label for="dateOfBirth" class="col-sm-2 col-form-label col-form-label-sm" ><b>Date of Birth</b></label>
                          <div className='col-sm-6'>
                              <input type="date" className="form-control form-control-sm" id='dateOfBirth' name='dateOfBirth' required />
                              <div class="invalid-feedback"> Please Provide Date of Birth </div>
                          </div>
                      </div>


                 <div className='form-group row m-3'>
                          <label for="occupation" class="col-sm-2 col-form-label col-form-label-sm" ><b>Occupation</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Enter occupation" required/>
                              <div class="invalid-feedback"> Please enter occupation </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="occupation" class="col-sm-2 col-form-label col-form-label-sm" ><b>Address</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Enter address" required/>
                              <div class="invalid-feedback"> Please enter address </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="occupation" class="col-sm-2 col-form-label col-form-label-sm" ><b>Phone Number</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Enter phone number" required/>
                              <div class="invalid-feedback"> Please enter Phone Number </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="emailid" className="col-sm-2 col-form-label col-form-label-sm" ><b>Email Id</b></label>
                          <div className='col-sm-6'>
                              <input type="email" className="form-control form-control-sm" name="emailid" placeholder="Enter Email id" required/>
                              <div class="invalid-feedback"> Please enter Email </div>
                          </div>
                 </div>


                <div className='form-group row m-3'>
                          <label for="username" class="col-sm-2 col-form-label col-form-label-sm" ><b>Username</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Enter Username" required/>
                              <div class="invalid-feedback"> Please enter username </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="password" className="col-sm-2 col-form-label col-form-label-sm" ><b>Password</b></label>
                          <div className='col-sm-6'>
                              <input type="password" className="form-control form-control-sm" name="password" placeholder="Enter password" required/>
                              <div class="invalid-feedback"> Please enter password </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="password" class="col-sm-2 col-form-label col-form-label-sm" ><b>Confirm Password</b></label>
                          <div className='col-sm-6'>
                              <input type="password" class="form-control form-control-sm" id="name" placeholder="confirm password" required/>
                              <div class="invalid-feedback"> Please enter confirm password </div>
                          </div>
                </div>


                <button className="btn btn-dark m-5" type="submit" onSubmit={this.handleSubmit} style={{backgroundColor:'#70718D'}}>Register</button>

                  <p> Already Registered? </p>
                  <p><span className='line'><a href='./'><b>Click here to Login </b></a></span></p>


                      </form>
                      </div>
                      </div>
                      </div>
                      </div>
    );
}

}

export default PatientRegistration ;