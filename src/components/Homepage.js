import React from 'react';
import Navigation from './Navigations';
import LoginForm from './Login-Form';


export default class Homepage extends React.Component {
    render() {
        return (
            <div className='container'>
                <Navigation />
                <br></br>
                <LoginForm />
            </div>
        )
    }
}