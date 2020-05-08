// write your custom hook here to control your checkout form
// import { useLocalStorage } from "./useLocalStorage";
import React, { useState } from "react";

export const useForm = (initialValue) => {
  // email value ✅
  // handlechanges should handle all inputs
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [values, handleChanges, showSuccessMessage, handleSubmit];
};

export default useForm;
