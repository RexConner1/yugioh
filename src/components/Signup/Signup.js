import React, { Component } from "react";

class SignUp extends Component {
    render() {
        return (
            <form>
                <h1>Sign Up</h1>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="email" className="form-control" placeholder="Enter user name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-center">Sign Up</button>
                <p className="forgot-password text-center">
                    Already registered <a href="/login">Sign in?</a>
                </p>
            </form>
        );
    }
}

export default SignUp