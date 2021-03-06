import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'
import img from '../images/img.png'
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
export default ()=>{
  //set the state default value
  // constructor(props) {
  //   super(props);
  //   this.state = {login: 'show col-lg-6 px-lg-4', register: 'hide'};
  // }
  const [state, setState] = useState({
    login:'show col-lg-6 px-lg-4', register: 'hide'
  })
  const showlogin= () => { //button click functionality
  
    setState({register: 'hide',login: 'show col-lg-6 px-lg-4'});
  }
  // const showregister= () => { //button click functionality
  //     setState({login: 'hide',register: 'show col-lg-6 px-lg-4'});
  // }
  // function login(){
  //   alert("Login Successful!!");
  // }
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  {
   
    return (
    <div className="App">
     
     <div className="page-holder justify-content-center py-4 bg-gray-100 vh-100">
      <div className="container box">
        <div className="row card1">
          <div className={state.login}>
            <div className="card ">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary">Fantasy Stock League</div>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4">Hi, welcome back! 👋👋</h3>
                <form id="loginForm" action="index.html">
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" name="email" type="email" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPassword" name="password" type="password" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                    <label className="form-check-label" for="remember">Remember me</label>
                  </div>
                  <button className="btn btn-primary" type="button" onClick={() => {navigate("/app" + location.search); }}>Submit</button>
                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Don't have an account? <a onClick={() => {navigate("/register" + location.search); }}>Register</a>.</div>
              </div>
            </div>
          </div>
           
          <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img className="img-fluid mb-4" width="480" height="200" src={img} alt=""  />
            <h1 className="mb-4 heading">Stock Market Simulator.</h1>
            <p className="lead text-muted"> Practice trading with virtual money to sharpen your knowledge of how the stock market works and how to use an online brokerage. FSL will help you gain confidence before risking your own money.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
)
};
}
