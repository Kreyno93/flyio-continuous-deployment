import React, {useEffect} from 'react';
import './App.css';
import axios from "axios";

type Car = {
    id: string,
    brand: string,
    model: string,
}

function App() {

    const [cars, setCars] = React.useState<Car[]>([]);
    const [brand, setBrand] = React.useState<string>("");
    const [model, setModel] = React.useState<string>("");

    const getData = () => {
        axios.get("/api/cars").then((response) => {
            setCars(response.data);
        })
    }

    useEffect(getData, [])

    const onChangeHandlerBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(event.target.value);
    }

    const onChangeHandlerModel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModel(event.target.value);
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post("/api/cars", {brand, model}).then((response) => {
            setCars([...cars, response.data]);
        }).then(() => {
            setBrand("");
            setModel("");
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>CARS</h1>
                <h2>ADDING CAR:</h2>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <p>BRAND: </p>
                    <input type="text" value={brand} onChange={onChangeHandlerBrand}/>
                    </div>
                    <div>
                        <p>MODEL: </p>
                    <input type="text" value={model} onChange={onChangeHandlerModel}/>
                    </div>
                    <button>SEND</button>
                </form>
                {cars.map((car) => (
                    <div key={car.id}>
                        <p>{car.brand}</p>
                        <p>{car.model}</p>
                    </div>
                ))}
            </header>
        </div>
    );
}

export default App;
