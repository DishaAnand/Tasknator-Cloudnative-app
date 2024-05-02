import React, { useState } from 'react';
import { message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './confirmation.module.scss';
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';

const ConfirmationEmail = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isConfirmationSubmitted, setIsConfirmationSubmitted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { username = '' } = location.state;


  const handleConfirmationSubmit = () => {

    const userpool = new CognitoUserPool({
      UserPoolId: 'us-east-1_OlGTHgHq3',
      ClientId: '55ec78ofevdp6emku5l1q4eg0r'
    });

    const user = new CognitoUser({
      Username: username,
      Pool: userpool
    });

    user.confirmRegistration(confirmationCode, true, function (err, result) {
      if (err) {
        message.error(err?.message || 'Error occurred');
      } else {
        setIsConfirmationSubmitted(true);
        message.success('User added successfully ! 🎉');
        navigate('/login');
      }
    });
  }

  return (
    <div className={styles.confirmationContainer}>
      <h2 className={styles.heading}>Register</h2>
      {!isConfirmationSubmitted ? (
        <>
          <p className={styles.info}>A confirmation email has been sent to your inbox. Please check your email.</p>
          <div className={styles.confirmationForm}>
            <input
              type="text"
              placeholder="Enter Confirmation Code"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
            <button className={styles.submitButton} onClick={handleConfirmationSubmit}>Submit</button>
          </div>
        </>
      ) : (
        <p className={styles.successMessage}>Registration confirmed successfully! Redirecting to login page...</p>
      )}
      {isConfirmationSubmitted && <div className={styles.loginRedirect}></div>}
    </div>
  );
};

export default ConfirmationEmail;
