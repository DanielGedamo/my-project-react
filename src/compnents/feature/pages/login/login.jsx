import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [userForm, setUserFrom] = useState({ Email: "", password: "" });
  const onChange = (e) => {
    const Value = e.target.value;
    const id = e.target.id;
    setUserFrom({ ...userForm, [id]: Value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    // useEffect(()=>{
    //   localStorage.setItem("user",JSON.stringify(user))
    // },[user])
    if (user === "null") {
      return alert("not Exists");
    } else if ((user.Email = !"email")) {
      alert("בדוק את כתובת הemail שלך");
    } else if ((user.password = !"password")) {
      alert("בדוק את הסיסמא שלך");
    } else {
      console.log("hgh");
    }
  };
  return (
    <div className="   d-flex justify-content-center mt-5">
      <form
        className="loginForm "
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="login card row d-flex justify-content-center align-items-center text-center h-10 w-30 p-3 ">
          <label htmlFor="email">Email</label>
          <input
            required={true}
            type="text"
            id="email"
            onChange={(e) => onChange(e)}
          ></input>
          <br />
          <label htmlFor="password">password</label>
          <input
            required={true}
            type="text"
            id="password"
            onChange={(e) => onChange(e)}
          ></input>
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
    </div>
  );
}

export default Login;
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

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
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
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="Registration" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
