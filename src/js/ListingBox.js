import React from "react";
import {listingModel} from "./MockData";
import ListingCard from "./ListingCard";



class ListingBox extends React.Component {
    render() {
        return(
            <div >
                {listingModel.map(model=><ListingCard model={model}/>)}
            </div>
        )
    }
}

export default ListingBox;
