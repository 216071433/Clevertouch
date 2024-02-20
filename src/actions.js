export const login = (email, password) => {
    // Perform login logic here (e.g., API call, validation, etc.)
    // For demonstration purposes, let's assume a successful login if the email and password are not empty strings
    if (email !== '' && password !== '') {
      // Dispatch a success action if the login is successful
      return {
        type: 'LOGIN_SUCCESS',
        payload: {
          email: email,
          password: password,
        },
      };
    } else {
      // Dispatch an error action if the login fails
      return {
        type: 'LOGIN_ERROR',
        payload: 'Invalid email or password',
      };
    }
  };
  
export const updateEmail = (email) => ({
    type: 'UPDATE_EMAIL',
    payload: email,
  });
  
  export const updatePassword = (password) => ({
    type: 'UPDATE_PASSWORD',
    payload: password,
  });
  