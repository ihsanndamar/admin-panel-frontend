import { useState } from 'react'

const useRegister = () => {

    const[id, setId] = useState()
    const[isSuccess, setIsSuccess] = useState(false)
    const[isLoading, setIsLoading] = useState(false)
    const[error, setIsError] = useState()

    
    
    const register = async (username, email, password) => {
        try {
            setIsLoading(true)
            const response = await fetch('https://localhost:7015/api/usera/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',

                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Expose-Headers': 'Content-Length,X-JSON',
                    'Access-Control-Max-Age': '86400',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'

                },
                body: JSON.stringify({username, email, password})
                


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
    }

    return { register, id, isSuccess, isLoading, isError: error }
}
 
export default useRegister;