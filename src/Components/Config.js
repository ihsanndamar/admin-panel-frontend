import { useEffect, useState } from "react";
import useBuilding from "../Hooks/useBuilding"

const Config = () => {
    const { buildings, isLoading, error, isSuccess } = useBuilding();
    const [buildingType, setBuildingType] = useState(['Farm', 'Mine', 'House', 'Barracks', 'Storage']);



    return (
        <div className="container text-center">

            <h2>Building Configuration</h2>
            {buildings && buildings.map(building => (



                <div key={building.id}>
                    <div class="m-4">
                        <form action="/examples/actions/confirmation.php" method="post">
                            <div class="row align-items-center g-3">


                                <div class="dropdown mr-1">
                                    <div className="col-auto">
                                        <label class="visually-hidden" for="inputBuildingType">Building Type</label>
                                        
                                        <button type="button" class="btn btn-secondary dropdown-toggle form-control" id="inputBuildingType" data-toggle="dropdown" aria-expanded="false" data-offset="10,20">
                                            {building.buildingType}
                                        </button>
                                        <div class="dropdown-menu">
                                            {buildingType.map(buildingType => (
                                                <p class="dropdown-item">{buildingType}</p>
                                            ))}
                                        </div>

                                    </div>
                                </div>



                                <div class="col-auto">
                                    <label class="visually-hidden" for="inputBuildingCost">Building Cost</label>
                                    <input type="number" class="form-control" id="inputBuildingCost" placeholder="BuildingCost" required value={building.buildingCost} />
                                </div>

                                <div class="col-auto">
                                    <label class="visually-hidden" for="inputConstructionTime">Construction Time</label>
                                    <input type="number" class="form-control" id="inputConstructionTime" placeholder="Construction Time" required value={building.constructionTime} />
                                </div>




                                <div class="col-auto">
                                    <br/>
                                    <button type="submit" class="btn btn-primary visually-hidden form-control">Update</button>
                                </div>
                                <div class="col-auto">
                                <br/>
                                    <button type="submit" class="btn btn-primary visually-hidden form-control">Delete</button>
                                </div>


                            </div>
                        </form>
                    </div>



                </div>
            ))}




            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}

        </div>
    );
}

export default Config;