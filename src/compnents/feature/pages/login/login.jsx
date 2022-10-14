import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userForm, setUserFrom] = useState({ Email: "", password: "" });
  const onChange = (e) => {
    const Value = e.target.value;
    const id = e.target.id;
    setUserFrom({ ...userForm, [id]: Value });
  }
 
  const onSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);
    if (user === "null") {
      return alert("not Exists");
    } 
    else if (user.Email =! "email"){
      alert("בדוק את כתובת הemail שלך");
    }
    else if(user.password =! "password"){
      alert("בדוק את הסיסמא שלך")
    }
    else {
       console.log("hgh");
    }

  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="login">
        <label htmlFor="email">Email</label>
        <input required={true} type="text" id="email" onChange={e => onChange(e)}></input>
        <br />
        <label htmlFor="password">password</label>
        <input required={true} type="text" id="password" onChange={e => onChange(e)}></input>
        <br></br>
        <input type={"submit"} id="submitBTR" value="כניסה "></input>
        <div>
          {" "}
          <span>אין לך חשבון?</span>
          {"     "}
          <Link to={"/Registration"}>להרשמה</Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
