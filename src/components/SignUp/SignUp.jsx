import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here with 'email' and 'password'
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Sending login credentials to the server for authentication
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // SignUp logic here
    console.log('SignUp - Email:', email);
    console.log('SignUp - Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-72 border border-gray-300 rounded-lg p-4 shadow-md">
        <h2>Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Confirm password"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
        <label className="text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-1"
            />
            Accept Terms and Conditions
          </label>
          
        
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-green-500 text-white rounded-full cursor-pointer mb-2"
          type="submit"
        >
          Sign Up
        </button>
       
      </form>
    </div>
  );
};

export default SignUp;