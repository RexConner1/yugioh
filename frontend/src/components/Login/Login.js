import React, { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = 'http://localhost:3000/api'
// const backendUrl = 'https://backend-yugioh-thing.herokuapp.com/api'

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();

    props.setUserId(null)

    props.history.push(`/`)
  };

  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(`${backendUrl}/auth/login`,
      user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      }
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));

    props.setUserId(response.data.id)

    props.history.push(`/decks/edit`)
  };

  // if there's a user show the message below
  if (user) {
    return (
      <div>
        {user.name} is logged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  // if there's no user, show the login form
  return (
    <div>
      <form className="col-lg-3 offset-lg-4" onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                className="form-control"
                value={username}
                name="username"
                placeholder="Enter a username"
                onChange={({ target }) => setUsername(target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="Enter a password"
                onChange={({ target }) => setPassword(target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary btn-center">Login</button>
      </form>
    </div>
  );
};

export default Login;
