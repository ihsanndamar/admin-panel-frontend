import { useState } from 'react';

const useLogin = () => {
    const[id, setId] = useState()
    const[isSuccess, setIsSuccess] = useState(false)
    const[isLoading, setIsLoading] = useState(false)
    const[error, setIsError] = useState()

    const login = async (email, password) => {
        try {
            setIsLoading(true)
            const response = await fetch('https://localhost:7015/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
            }).catch(err => {
                setIsLoading(false)
                setIsError(err)
            })

            const data = await response.json()
            console.log(data)
            setIsLoading(false)
            setIsSuccess(true)
            setId(data.id)
            return data
        } catch (err) {
            setIsLoading(false)
            setIsError(err)
        }
    };
    return { login };
}
 
export default useLogin;