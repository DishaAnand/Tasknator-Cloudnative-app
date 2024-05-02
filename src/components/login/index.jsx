import React, { useState } from 'react';
import styles from './login.module.scss';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { CognitoUser, AuthenticationDetails,CognitoUserPool } from 'amazon-cognito-identity-js'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userpool = new CognitoUserPool({
    UserPoolId: 'us-east-1_OlGTHgHq3',
    ClientId: '55ec78ofevdp6emku5l1q4eg0r'
  });

  const handleLogin = async () => {
    try {
      const result = await authenticateUser(username, password); 
      console.log('Login successful:', result);
      navigate('/todolist');
    } catch (error) {
      message.error(error?.message || 'Err occured');
    }
  };

  const authenticateUser = (username, Password) => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: username,
        Pool: userpool
      });

      const authDetails = new AuthenticationDetails({
        Username: username,
        Password
      });

      user.authenticateUser(authDetails, {
        onSuccess: (result) => {
          console.log('Login successful');
          resolve(result);
        },
        onFailure: (err) => {
          console.log('Login failed', err);
          reject(err);
        }
      });
    });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <input
          className={styles.inputText}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
