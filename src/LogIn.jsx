import { useState }  from "react";
import logo from "./assets/logosmol.svg";


export function Login() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // run login API
  alert(email + password);
  };
  return (
     <>
      <div className="container">
        <img src={logo} alt="WWSCouts Logo" />
        <h2>Manage Your Account</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="imputcontainer">
          <p>Email</p>
          <input value={email} onChange={e=>setEmail(e.target.value)}
           type="text" />
          </div>
          <div className="inputcontainer">
            <p>Password</p>
            <input value={password} onChange={e=>setPassword(e.target.value)}
            type="password" />
          </div>
          <div className="bottomFrom">
            <button type="submit">LogIn</button>
            <div className="links">
              <p>New User?</p>
              <p>Forgot Password?</p>
            </div>
          </div>
        </form>
    </div>
  </>
  );
}