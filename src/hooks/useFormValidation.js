import { useState } from "react";

export default function useFormValidation(shouldIncludeConfirmedPassword) {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmedPasswordError, setConfirmedPasswordError] = useState("");
  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Please input the correct format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("Your password is too short!");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmedPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmedPassword(value);
    if (value.length < 6) {
      setConfirmedPasswordError("Your password is too short!");
    } else if (value !== password) {
      setConfirmedPasswordError("Passwords do not match!");
    } else {
      setConfirmedPasswordError("");
    }
  };

  const hasErrors = () => {
    if (shouldIncludeConfirmedPassword) {
      return (
        !validateEmail(email) ||
        password.length < 6 ||
        confirmedPassword.length < 6 ||
        password !== confirmedPassword
      );
    } else {
      return !validateEmail(email) || password.length < 6;
    }
  };

  return {
    email,
    password,
    confirmedPassword,
    emailError,
    passwordError,
    confirmedPasswordError,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmedPasswordChange,
    hasErrors
  };
}
