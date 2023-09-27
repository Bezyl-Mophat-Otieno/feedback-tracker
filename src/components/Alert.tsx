import React from "react";
import "../styles/alert.css";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
// Import the desired icons

type props = {
  [key: string]: any;
};

function Alert({ type, title, message, setSuccess }: props) {
  // Define icon components based on the type (e.g., 'success', 'warning', 'error')
  const iconComponents: props = {
    success: <FaCheckCircle />,
    warning: <FaExclamationCircle />,
    error: <FaTimes />,
  };
  const onClose = () => {
    setSuccess(false);
  };
  setTimeout(() => {
    setSuccess(false);
  }, 3000);

  return (
    <div className={`alert-box ${type}`}>
      <div className="alert-icon">{iconComponents[type]}</div>
      <div className="alert-content">
        <div className="alert-title">{title}</div>
        <div className="alert-message">{message}</div>
      </div>
      <div className="close-button" onClick={onClose}>
        <FaTimes />
      </div>
    </div>
  );
}

export default Alert;
