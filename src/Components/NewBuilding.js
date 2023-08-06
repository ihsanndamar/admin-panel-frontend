import React, { useState } from 'react';
import useBuildingTypes from '../Hooks/useBuildingTypes';
import { useParams } from 'react-router-dom';

const NewBuilding = () => {
    const { buildingTypes, isLoading: isLoadingTypes } = useBuildingTypes();



    const [buildingType, setBuildingType] = useState('');
    const [buildingCost, setBuildingCost] = useState();
    const [constructionTime, setConstructionTime] = useState();



    const handleAddBuilding = (e) => {


        fetch('https://localhost:7015/api/Building', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                buildingType: buildingType,
                buildingCost: buildingCost,
                constructionTime: constructionTime
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err.message);
            })

        
    }

    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            setBuildingType(e.target.textContent);
            document.getElementById('inputAddBuildingType').textContent = e.target.textContent;
        });
    });



    return (
        <div className="">

                <div class="m-4">
                    <form  onSubmit={handleAddBuilding}>
                        <div class="row align-items-center g-3">


                            <div class="dropdown mr-1">
                                <div className="col-auto">
                                    <label class="visually-hidden" for="inputAddBuildingType">Building Type</label>
                                    <br />
                                    <button type="button" class="btn btn-secondary dropdown-toggle form-control" id="inputAddBuildingType" data-toggle="dropdown" aria-expanded="false" data-offset="10,20">
                                        Building Type
                                    </button>
                                    
                                    <div class="dropdown-menu">
                                        {buildingTypes && buildingTypes.map((buildingTypeItem) => (
                                            <li
                                                key={buildingTypeItem.name}
                                                class="dropdown-item"
                                            >
                                                {buildingTypeItem.name}
                                            </li>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <div class="col-auto">
                                <br />
                            </div>



                            <div class="col-auto">
                                <label class="visually-hidden" for="inputBuildingCost">Building Cost</label>
                                <input type="number" class="form-control" id="inputBuildingCost" placeholder="BuildingCost" required onChange={e => setBuildingCost(e.target.value)}/>
                            </div>

                            <div class="col-auto">
                                <label class="visually-hidden" for="inputConstructionTime">Construction Time</label>
                                <input type="number" class="form-control" id="inputConstructionTime" placeholder="Construction Time" required onChange={e => setConstructionTime(e.target.value)}/>
                            </div>

                            




                            <div class="col-auto">
                                <br />
                                <button type="submit" class="btn btn-primary visually-hidden form-control">Add</button>
                            </div>




                        </div>
                    </form>
                </div>


            

        </div>
    );
}

export default NewBuilding;