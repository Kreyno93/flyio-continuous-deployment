package de.neuefische.backend;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CarService {

    private final CarRepo carRepo;

    public CarService(CarRepo carRepo) {
        this.carRepo = carRepo;
    }

    public Car saveCar(CarDTO car) {
        return carRepo.save(new Car(UUID.randomUUID().toString(), car.brand(), car.model()));
    }

    public List<Car> findAllCars() {
        return carRepo.findAll();
    }
}
