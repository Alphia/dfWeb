import React from "react";
import {listingModel} from "./MockData";
import MediaCard from "./MediaCard";



class ListingBox extends React.Component {
    render() {
        return(
            <div >
                {listingModel.map(item=><MediaCard/>)}
            </div>
        )
    }
}

export default ListingBox;
