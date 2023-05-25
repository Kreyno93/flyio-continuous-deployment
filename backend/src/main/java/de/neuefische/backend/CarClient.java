package de.neuefische.backend;

import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.service.annotation.HttpExchange;
import org.springframework.web.service.annotation.PostExchange;

import java.util.List;

@HttpExchange("/api/cars")
public interface CarClient {

    @GetExchange()
    List<Car> findAllCars();

    @PostExchange()
    Car saveCar(Car car);

}
