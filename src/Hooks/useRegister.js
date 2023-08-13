import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {

    const[id, setId] = useState()
    const[isSuccess, setIsSuccess] = useState(false)
    const[isLoading, setIsLoading] = useState(false)
    const[error, setIsError] = useState()

    let navigate = useNavigate();
    
    
    const register = async (username, email, password) => {
        try {
            setIsLoading(true)
            const response = await fetch('http://16.171.200.109:7015/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, email, password})
                


            }).catch(err => {
                setIsLoading(false)
                setIsError(err)
            })

            const data = await response.json()
            console.log(data)
            setIsLoading(false)
            if(data.id !== undefined){
                setIsSuccess(true)
                navigate('/login')
            }
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