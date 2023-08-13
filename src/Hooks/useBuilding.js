import { useEffect,useState } from "react";

const useBuilding = () => {
    const[buildings, setBuildings] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[error, setIsError] = useState();
    const[isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://16.171.200.109:7015/api/Building')
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBuildings(data);
                setIsLoading(false);
                setIsSuccess(true);
            })
            .catch(err => {
                setIsError(err.message);
                setIsLoading(false);
            })
    }, []);









    return { buildings, isLoading, error, isSuccess };
}
 
export default useBuilding;