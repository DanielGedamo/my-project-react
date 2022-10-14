import "./Registration.css";
import React, { useState } from "react";
import {Link} from "react-router-dom"


export const emailValidator = (Email) => {
  if (!Email) {
    return "Email is required";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(Email)) {
    return "Incorrect Email format";
  }
  return "";
};
export const fullNameValidator = (fullName) => {
  if (!fullName) {
    return "Full name is required";
  } else if (fullName.length < 2) {
    return "name to short";
  }
};

export const passwordValidator = (password) => {
  if (!password) {
    return "Password is required";
  } else if (password.length < 8) {
    return "Password must have a minimum 8 characters";
  }
  return "";
};

export const confirmPasswordValidator = (confirmPassword, Password) => {
  if (!confirmPassword) {
    return "Confirm password is required";
  } else if (confirmPassword.length < 8) {
    return "Confirm password must have a minimum 8 characters";
  } else if (confirmPassword !== Password) {
    return "Passwords do not match";
  }
  return "";
};

function Registration() {
  const [user, setUser] = useState({
    FullName: "",
    Email: "",
    Birthdate: "",
    Picture: "",
    Password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    const Value = e.target.value;
    const id = e.target.id;
    switch (id) {
      case "FullName":
        const fullNameValidation = fullNameValidator(Value);
        setError(fullNameValidation);
        break;
      case "Email":
        const emailValidation = emailValidator(Value);
        setError(emailValidation);
        break;
      case "Password":
        const passwordValidation = passwordValidator(Value);
        setError(passwordValidation);
        break;
      case "confirmPassword":
        const confirmPassword = confirmPasswordValidator(Value, user.Password);
        setError(confirmPassword);
        break;

      default:
        break;
    }
    setUser({ ...user, [id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
  };
  console.log(user);
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h1>Register</h1>
      <div className="registration">
        <label htmlFor="fullName">Full name</label>
        <input type="text" id="FullName" onChange={(e) => onChange(e)}></input>
        <br></br>
        <label htmlFor="Email">Email</label>
        <input type="text" id="Email" onChange={(e) => onChange(e)}></input>
        <br></br>
        <label htmlFor="Birthdate">Birthdate </label>
        <input type="date" id="Birthdate" onChange={(e) => onChange(e)}></input>
        <br></br>
        <label htmlFor="Picture">Picture </label>
        <input type="file" id="Picture" onChange={(e) => onChange(e)}></input>
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="Password"
          onChange={(e) => onChange(e)}
        ></input>
        <br></br>
        <label htmlFor="confirmPassword">confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          onChange={(e) => onChange(e)}
        ></input>
        <br></br>
      </div>

      <input type={"submit"} value="Send "></input>
      <span> {error} </span>
     <div> <span> כבר יש לך חשבון?</span>{ "     "}<Link to ={"/login"}>לכניסה</Link></div>
    </form>
  );
}

export default Registration;
