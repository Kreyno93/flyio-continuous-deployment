package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
public class CarController {

    private final CarService carService;

    @GetMapping
    List<Car> findAllCars(){
        return carService.findAllCars();
    }

    @PostMapping
    Car saveCar(@RequestBody CarDTO car) {
        return carService.saveCar(car);
    }
}
