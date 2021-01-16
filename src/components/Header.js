
import React from "react";

const Header = () => {
    return (
        <div className="jumbotron">
            <h2 className="display-4"><span class="material-icons logo ">
                local_dining
         </span>  Foodstacks Recipes</h2>

            <div class="input-group mx-auto w-50">
                <input type="text" class="form-control" placeholder="Enter Recipe or food name " aria-label="Search here" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2"><button className="btn btn-primary">Search</button></span>
                </div>
            </div>
            </div>
    )
}

export default Header; 
