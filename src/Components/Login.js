import React, { useState } from 'react';
import useLogin from '../Hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const { login, id, isSuccess, isLoading, error} = useLogin()

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await login(username, password)
        if(isSuccess){
            console.log(id)
            navigate('/config')
            document.cookie = `id=${id}`
            document.getElementById('config-item').className = "nav-link"
        }
        else{
            console.log(error)
        }
        
    }

    return (
        <div className="login">
            {isLoading && <div>Loading...</div>}

            <div class="container d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" onChange={e => setUsername(e.target.value)}/>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;