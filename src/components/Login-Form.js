
import React from 'react';


export default class LoginForm extends React.Component {
    render() {
    return (
        <form>
            <h3 className='p-3 bg-light bg-opacity-10 border border-primary border-start-0 rounded-pill'>Log In</h3>
            <br></br>
            <div className="mb-3">
                <label className="form-label">Username</label>

                <input type="username" className="form-control" id="unsername"></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>

                <input type="password" className="form-control" id="employeePassword"></input>
            </div>

            <div><button type="submit" className="btn btn-primary">Submit</button></div>
        </form>
        )
    }
}