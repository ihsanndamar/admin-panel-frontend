import { useEffect, useState } from "react";
import useBuilding from "../Hooks/useBuilding"
import NewBuilding from "./NewBuilding";
import useBuildingTypes from "../Hooks/useBuildingTypes";

const Config = () => {
    const { buildings, isLoading, error, isSuccess } = useBuilding();
    const {buildingTypes, isLoading: isLoadingTypes} = useBuildingTypes();


    const handleUpdateBuilding = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_URL + '/api/Building/' + e.target.buildingId.value, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                buildingType: document.getElementById(`buildingType-${e.target.buildingId.value}`).textContent,
                buildingCost: e.target.inputBuildingCost.value,
                constructionTime: e.target.inputConstructionTime.value
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

    const handleDeleteBuilding = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this building?");
        if (!confirmDelete) return;

        const isSuccessDelete = false;

        fetch(process.env.REACT_APP_URL + '/api/Building/' + id, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                isSuccessDelete = true;
                console.log(data);
            })
            .catch(err => {
                console.log(err.message);
            })

        if(isSuccessDelete){
            window.location.reload();
        }
    }


    return (
        <div className="container text-center">

            <h2>Building Configuration</h2>

            <NewBuilding/> 

            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {buildings && buildings.map(building => (

                <div key={building.id}>
                    <div class="m-4">
                        <form onSubmit={handleUpdateBuilding}>

                            <input
                                type="hidden"
                                name="buildingId"
                                value={building.id}
                            />

                            <div class="row align-items-center g-3">

                                <div class="dropdown mr-1">
                                    <div className="col-auto">
                                        <label class="visually-hidden" for="inputBuildingType">Building Type</label>

                                        <button type="button" class="btn btn-secondary dropdown-toggle form-control" id={`buildingType-${building.id}`} data-toggle="dropdown" aria-expanded="false" data-offset="10,20">
                                            {building.buildingType}
                                        </button>

                                        {buildingTypes && <div class="dropdown-menu">
                                            {buildingTypes.map((buildingTypeItem) => (
                                                <li
                                                    key={buildingTypeItem.name}
                                                    class="dropdown-item"
                                                    onClick={() => {
                                                        document.getElementById('buildingType-' + building.id).textContent = buildingTypeItem.name}}
                                                >
                                                    {buildingTypeItem.name}
                                                </li>
                                            ))}
                                        </div>}



                                    </div>
                                </div>



                                <div class="col-auto">
                                    <label class="visually-hidden" for="inputBuildingCost">Building Cost</label>
                                    <input type="number" class="form-control" id="inputBuildingCost" placeholder="BuildingCost" required defaultValue={building.buildingCost} />
                                </div>

                                <div class="col-auto">
                                    <label class="visually-hidden" for="inputConstructionTime">Construction Time</label>
                                    <input type="number" class="form-control" id="inputConstructionTime" placeholder="Construction Time" required defaultValue={building.constructionTime} />
                                </div>




                                <div class="col-auto">
                                    <br />
                                    <button type="submit" class="btn btn-primary visually-hidden form-control">Update</button>
                                </div>
                                <div class="col-auto">
                                    <br />
                                    <button type="delete" class="btn btn-primary visually-hidden form-control" onClick={() => handleDeleteBuilding(building.id)} >Delete</button>
                                </div>


                            </div>
                        </form>
                    </div>



                </div>
            ))}




        </div>
    );
}

export default Config;