import React, {useEffect} from 'react';
import './App.css';
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import CarGallery from "./components/CarGallery";

export type Car = {
    id: string,
    brand: string,
    model: string,
}

function App() {

    const [cars, setCars] = React.useState<Car[]>([]);

    const getData = () => {
        axios.get("/api/cars").then((response) => {
            setCars(response.data);
        })
    }

    useEffect(getData, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>CARS</h1>
                <h2>ADDING CAR:</h2>
                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/cars"} element={<CarGallery cars={cars}/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
