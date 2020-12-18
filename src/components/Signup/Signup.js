import React, { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = 'https://backend-yugioh-thing.herokuapp.com/api'

function SignUp(props) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("user");
    //     if (loggedInUser) {
    //       const foundUser = JSON.parse(loggedInUser);
    //       setUser(foundUser);
    //     }
    // }, []);
    
    // const handleLogout = () => {
    //     setUser({});
    //     setName("");
    //     setUsername("");
    //     setPassword("");
    //     localStorage.clear();
    
    //     props.setUserId(null)
    
    //     props.history.push(`/`)
    // };

      // login the user
    const handleSubmit = async e => {
        e.preventDefault();
        const user = { name, username, password };
        // send the username and password to the server
        const response = await axios.post(`${backendUrl}/auth/signup`, user);
        // set the state of the user
        setUser(response.data);
        // store the user in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));

        props.setUserId(response.data.id)

        props.history.push(`/decks/edit`)
    };

    // if (user) {
    //     return (
    //         <div>
    //         {user.name} is loggged in
    //         <button onClick={handleLogout}>logout</button>
    //         </div>
    //     );
    // }

    return (
        <div>
            <form className="col-lg-3 offset-lg-4" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        name="name"
                        placeholder="Enter your name"
                        onChange={({ target }) => setName(target.value)}
                    />
                </div>

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

                <button type="submit" className="btn btn-primary btn-center">Sign Up</button>

                <p className="forgot-password text-center">
                    Already registered <a href="/login">Sign in?</a>
                </p>
            </form>
        </div>
    );
    
}

export default SignUp