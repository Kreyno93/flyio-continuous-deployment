import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function Homepage() {

    const [brand, setBrand] = React.useState<string>("");
    const [model, setModel] = React.useState<string>("");

    const onChangeHandlerBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(event.target.value);
    }

    const onChangeHandlerModel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModel(event.target.value);
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post("/api/cars", {brand, model}).then((response) => {
            console.log(response.data);
        }).then(() => {
            setBrand("");
            setModel("");
        })
    }

    return (
        <div>
            <header><h1>HELLO AND WELCOME</h1></header>
            <Link to={"/cars"}>Car Gallery</Link>
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
        </div>
    );
}

export default Homepage;