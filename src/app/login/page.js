import React from 'react'

const page = () => {
    return (
        <div className='bg-gray-500 w-96'>
            <input placeholder='Enter your name' /><br />
            <input placeholder='Enter your password' type='password' /><br />
            <button>Login</button>
            <p>Don't have an account yet? <a>Sign Up</a> instead</p>
        </div>
    )
}

export default page