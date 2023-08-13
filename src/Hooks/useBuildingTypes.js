import { useState, useEffect } from 'react';

const useBuildingTypes = () => {
    const[buildingTypes, setBuildingTypes] = useState();
    const[isLoading, setIsLoading] = useState(false);
    const[error, setIsError] = useState();
    const[isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://16.171.200.109:7015/api/BuildingType')
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
                
            })
            .then(data => {
                setBuildingTypes(data);
                setIsLoading(false);
                setIsSuccess(true);
            })
            .catch(err => {
                setIsError(err.message);
                setIsLoading(false);
            })

            console.log(buildingTypes);
    }, []);

    return { buildingTypes , isLoading, error, isSuccess};
}
 
export default useBuildingTypes;