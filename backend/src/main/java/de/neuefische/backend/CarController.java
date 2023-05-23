package de.neuefische.backend;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @PostMapping()
    public Car addCar(@RequestBody Car car) {
        return carService.saveCar(car);
    }

    @GetMapping()
    public List<Car> findAllCars() {
        return carService.findAllCars();
    }

}
