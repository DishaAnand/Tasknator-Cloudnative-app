import React, { useState } from 'react';
import styles from './signup.module.scss';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userpool = new CognitoUserPool({
    UserPoolId: 'us-east-1_OlGTHgHq3',
    ClientId: '55ec78ofevdp6emku5l1q4eg0r'
  });

  const handleSignup = () => {
    const attributeList = [];
    attributeList.push(new CognitoUserAttribute({
      Name: 'email',
      Value: email,
    }));  

    attributeList.push(new CognitoUserAttribute({
      Name: 'name',
      Value: username,
    }));

    userpool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        message.error(err?.message || 'Err occured');
      } else {
        navigate('/confirmation', { state: { username } });
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.signupContainer}>
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="User name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className={styles.inputUsername}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
