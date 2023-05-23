package de.neuefische.backend;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    private final CarRepo carRepo;

    public CarService(CarRepo carRepo) {
        this.carRepo = carRepo;
    }

    public Car saveCar(Car car) {
        return carRepo.save(car);
    }

    public List<Car> findAllCars() {
        return carRepo.findAll();
    }
}
