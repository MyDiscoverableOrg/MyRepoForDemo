import React from 'react'

const NoMatch=({history})=>{
    return (
        <div style={{marginLeft:'10px'}}>
            <h2> 404 Page</h2>
            <p>Redirecting to <span style={{color:'lightblue'}} onClick={()=>history.push('/')}>Login Page</span></p>
        </div>
    )
}

export default NoMatch