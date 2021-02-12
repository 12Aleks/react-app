import React from 'react'

export const Form = () =>{
    return(
        <form>
            <div className="form-group">
                <input type="text"
                className="form-control border-primary"
                placeholder="Add new task"/>
            </div>
            <button className="btn btn-outline-primary">Send</button>
        </form>
    )
}