import React from 'react';
import {Car} from "../App";
import CarCard from "./CarCard";
import {Link} from "react-router-dom";

type Props = {
    cars: Car[],
}

function CarGallery(props:Props) {
    return (
        <div>
            <Link to={"/"}>back</Link>
            {props.cars.map((car) => (<CarCard car={car} key={car.id}/>))}
        </div>
    );
}

export default CarGallery;