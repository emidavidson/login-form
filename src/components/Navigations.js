import React from 'react';


export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Bananas_by_cactus_cowboy.svg" 
                        alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img>
                        &nbsp;Food and Stuff
                    </a>

                    <ul class="nav justify-content-end">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Food</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#" >Stuff</a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}