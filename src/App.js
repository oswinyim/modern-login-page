import logo from "./logo.svg";
import "./App.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Item from "./UI/Item";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header">
            <h1>React Login</h1>
            <div>Please login!</div>
          </div>
          <form className="form">
            <Item
              iconName="mail"
              type="email"
              placeholder="Enter Email"
              required={true}
            />
            <Item
              iconName="lock"
              type="password"
              placeholder="Enter Password"
              required={true}
            />
            <div className="other-section">
              <div className="check-box">
                <input type="checkbox" id="rememberMe"></input>
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="#"> Forgot password</a>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="sign-up">
            Need to create account? <a href="#">Sign up</a>
          </div>
        </div>
        <div className="social-login">
          <div>Other login platform</div>
          <div className="btn">
            <FaFacebook />
            <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
