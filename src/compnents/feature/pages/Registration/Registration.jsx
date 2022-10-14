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
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       // password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="login" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
