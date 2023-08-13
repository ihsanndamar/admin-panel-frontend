import { useState } from 'react';

const useLogin = () => {
    const[id, setId] = useState()
    const[isSuccess, setIsSuccess] = useState(false)
    const[isLoading, setIsLoading] = useState(false)
    const[error, setIsError] = useState()

    const login = async (username, password) => {
        try {
            setIsLoading(true)
            const response = await fetch('http://16.171.200.109:7015/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                    
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