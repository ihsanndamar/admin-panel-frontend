import { useState } from 'react';

const useLogin = () => {
    const[id, setId] = useState()
    const[isSuccess, setIsSuccess] = useState(false)
    const[isLoading, setIsLoading] = useState(false)
    const[error, setIsError] = useState()

    const login = async (username, password) => {
        try {
            setIsLoading(true)
            const response = await fetch(process.env.REACT_APP_URL + '/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://16.171.200.109:7015/*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
                    
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }).catch(err => {
                setIsLoading(false)
                setIsError(err)
            })

            const data = await response.json()
            console.log(data)
            setIsLoading(false)
            if(data.id !== undefined){
                setIsSuccess(true)
            }
            setId(data.id)
            return data
        } catch (err) {
            setIsLoading(false)
            setIsError(err)
        }
    };
    return { login, id, isSuccess, isLoading, error };
}
 
export default useLogin;