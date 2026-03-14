import React from "react";

function Signup() {
  return (
    <div style={{textAlign:"center", marginTop:"40px"}}>

      <h2>SIGNUP HERE</h2>

      <form style={{width:"350px", margin:"auto"}}>

        <input type="text" placeholder="First Name" className="form-control"/><br/>

        <input type="text" placeholder="Last Name" className="form-control"/><br/>

        <input type="email" placeholder="Email" className="form-control"/><br/>

        <input type="password" placeholder="Password" className="form-control"/><br/>

        <input type="password" placeholder="Confirm Password" className="form-control"/><br/>

        <input type="text" placeholder="Phone Number" className="form-control"/><br/>

        <select className="form-control">
          <option>Male</option>
          <option>Female</option>
        </select>

        <br/>

        <div style={{textAlign:"left"}}>
          <input type="radio" name="type"/> student
          <input type="radio" name="type" style={{marginLeft:"20px"}}/> professional
        </div>

        <br/>

        <div style={{textAlign:"left"}}>
          <input type="checkbox"/> Agree to terms and conditions
        </div>

        <br/>

        <button className="btn btn-success" style={{width:"100%"}}>
          REGISTER
        </button>

      </form>

      <p style={{marginTop:"20px"}}>
        Copyright ©copy: guvi.in
      </p>

    </div>
  );
}

export default Signup;