import React from 'react'
import {NavLink} from "react-router-dom";

export const About = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello!!!</h1>
            <p className="lead">This is my first test application written in react</p>
            <hr className="my-4"/>
            <p className="lead">
                <NavLink className="btn btn-outline-primary btn-lg" to="/" role="button">Learn more</NavLink>
            </p>
        </div>
    )
}