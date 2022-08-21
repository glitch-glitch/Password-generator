import React from 'react';
import '../style.css';

export const UGCstaffadd = () => {
  return (
    <>
  
  <div className="container">
    <div className="title">Create Staff</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your Full Name" required="" />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input
              type="text"
              placeholder="Enter your Email-id"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input
              type="Text"
              placeholder="Generated Password"
              style={{ padding: 4 }}
              required=""
            />
          </div>
        </div>
        {/* <div class="gender-details">
    <input type="radio" name="gender" id="dot-1">
    <input type="radio" name="gender" id="dot-2">
    <input type="radio" name="gender" id="dot-3">
    <span class="gender-title">Gender</span>
    <div class="category">
      <label for="dot-1">
      <span class="dot one"></span>
      <span class="gender">Male</span>
    </label>
    <label for="dot-2">
      <span class="dot two"></span>
      <span class="gender">Female</span>
    </label>
    <label for="dot-3">
      <span class="dot three"></span>
      <span class="gender">Prefer not to say</span>
      </label>
    </div>
  </div> */}
        <div className="button">
          <input type="submit" defaultValue="Register" />
        </div>
      </form>
    </div>
  </div>
</>
  )
} 
export default UGCstaffadd;
