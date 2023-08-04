import React, { useState } from 'react'
import useRegister from '../Hooks/useRegister'

const Register = () => {

    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[password2, setPassword2] = useState('')

    const { register, id, isSuccess, isLoading, error} = useRegister()



    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== password2) return alert('Passwords do not match')
        const data = await register(username, email, password)
    }


    
    
    return (
        <div className="register">
            <h1>Register</h1>
            <div class="container d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit}>

                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" onChange={e => setUsername(e.target.value)}/>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword2">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" onChange={e => setPassword2(e.target.value)}/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

            {isLoading && <div>Loading...</div>}
            {isSuccess && <div>Success!</div>}
            {error && <div>{error}</div>}
        </div>
    );
}

export default Register
