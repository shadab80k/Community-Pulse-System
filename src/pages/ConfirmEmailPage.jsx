import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/ConfirmEmailPage.css';

const ConfirmEmailPage = () => {
  const location = useLocation();
  const email = location.state?.email || 'your email';

  return (
    <div className="confirm-email-container">
      <div className="confirm-email-card">
        <div className="confirm-email-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
          </svg>
        </div>
        <h1>Check your email</h1>
        <p>
          We've sent a confirmation link to <strong>{email}</strong>
        </p>
        <p className="confirm-instructions">
          Please check your email and click on the confirmation link to activate your account.
        </p>
        <div className="confirm-actions">
          <Link to="/login" className="login-button">
            Go to Login
          </Link>
          <Link to="/signup" className="resend-button">
            Back to Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailPage;