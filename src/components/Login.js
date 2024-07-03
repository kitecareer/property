import React, { useCallback, useState } from 'react';
import { Button, CircularProgress, Grid, TextField, Typography, Container, Paper } from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import Axios from '../AxiosInstance';
import Swal from 'sweetalert2';
import '../css/Title.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
const REDIRECT_URI = 'https://plenty-planets-beam-42-118-51-2.loca.lt/account/login';
// const REDIRECT_URI = 'http://localhost:3000/account/login'

export default function LoginForm() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState({
    username: false,
    password: false,
  });
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = () => {
    const ValidateUser = {
      username: UserName === "" ? true : '',
      password: Password === "" ? true : Password.length <= 7 ? "wrong" : "",
    };
    setError(ValidateUser);

    if ((UserName !== "" && Password !== "") && (Object.values(ValidateUser).every(val => val !== "wrong"))) {
      setLoading(true);
      const formData = new URLSearchParams();
      formData.append('username', UserName);
      formData.append('password', Password);

      Axios.post("http://192.168.1.41:8000/login", formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then((res) => {
        setLoading(false);
        if (res.data.detail === "Password must be at least 8 characters long") {
          setError({ ...Error, password: "wrong" });
        } else if (res.data) {
          localStorage.setItem("Name", res.data.name);
          localStorage.setItem("Role", res.data.role);
          localStorage.setItem("user_id", res.data.id);
          localStorage.setItem("Token", res.data.access_token);
          res.data.emp_id && localStorage.setItem("EmpID", res.data.emp_id);

          if (res.data.role === 'Owner' || 'Customer') {
            navigate('/dashboard');
          } else {
            Swal.fire({
              title: "Access Denied",
              text: "You do not have permission to access this page.",
              icon: "error",
              timer: 1500,
              showConfirmButton: false,
            });
          }
        }
      }).catch(err => {
        setLoading(false);
        if (err.response && err.response.data) {
          const { detail } = err.response.data;
          if (detail === "Incorrect Password") {
            Swal.fire({
              title: "Password is incorrect",
              text: "Try Again!!",
              timer: 1500,
              showConfirmButton: false,
              icon: "warning"
            });
          } else if (detail[0]?.msg === "value is not a valid email address") {
            Swal.fire({
              title: "Value is not a valid email address",
              text: "Try Again!!",
              timer: 1500,
              showConfirmButton: false,
              icon: "warning"
            });
          } else if (detail === "Incorrect Email") {
            Swal.fire({
              title: "Incorrect Email",
              text: "Try Again!!",
              timer: 1500,
              showConfirmButton: false,
              icon: "warning"
            });
          }
        } else {
          Swal.fire({
            title: "Database not connected",
            icon: "error",
          });
        }
      });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!ShowPassword);
  };





  return (
    <Grid className='login' container sx={{ p: 5, display: "flex", justifyContent: "center", alignItems: "center", height: '90vh' }}>
      <Grid xs={6}>
        <Container component="main" maxWidth="xs" sx={{ paddingTop: '20px', }}>
          <Paper elevation={3}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, }}>Login</Typography>
            <GoogleOAuthProvider clientId="689149408166-2ojsqg9qsnulvq7ijmgh0db2nmi8vtke.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(response) => {
              console.log(response);
              // Handle successful login
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
            <Typography align="center" sx={{ margin: '20px 0' }}>-OR-</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  placeholder='Email address'
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  error={Error.username}
                  helperText={Error.username && "Enter valid Name"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField className='input'
                  variant="outlined"
                  placeholder='Password'
                  fullWidth
                  value={Password}
                  onChange={e => setPassword(e.target.value)}
                  error={Boolean(Error.password)}
                  helperText={Error.password && "Password is Requird"}
                  type={ShowPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <Button disableRipple onClick={handleTogglePassword}>
                        {ShowPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                      </Button>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2, background: '#27563A', borderRadius: '3px' }}
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Login'}
                </Button>
                <p>Don’t have an account? <Link to='/Register'>Register</Link></p>
              </Grid>
            </Grid>
          
          </Paper>
        </Container>
      </Grid>
      <Grid xs={6}></Grid>
    </Grid>
  )
}
